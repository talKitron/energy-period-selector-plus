/* eslint-disable @typescript-eslint/no-explicit-any */
import { mdiCompare, mdiCompareRemove, mdiCalendarTodayOutline } from '@mdi/js';
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInDays,
  endOfDay,
  endOfMonth,
  endOfToday,
  endOfWeek,
  endOfYear,
  isWithinInterval,
  startOfDay,
  startOfMonth,
  startOfToday,
  startOfWeek,
  startOfYear,
} from 'date-fns/esm';
import { UnsubscribeFunc } from 'home-assistant-js-websocket';
import { LitElement, PropertyValues } from 'lit';
import { html, nothing } from 'lit/html';
import { customElement, property, state } from 'lit/decorators';
import { firstWeekdayIndex } from './datetime/first-weekday';
import { formatDate, formatDateMonthYear, formatDateShort, formatDateYear } from './datetime/format-date';
import { toggleAttribute, ToggleButton } from './types';
import { computeRTLDirection } from './utils/compute_rtl';
import { EnergyData, getEnergyDataCollection } from './energy';
import { SubscribeMixin } from './energy/subscribe-mixin';
import { HomeAssistant } from './type/home-assistant';
import { EnergyPeriodSelectorPlusConfig } from './energy-period-selector-plus-config';
import type { DateRangePickerRanges } from './datetime';
import { localize } from './localize/localize';
import { stylesBase } from './style';

@customElement('energy-period-selector-base')
export class EnergyPeriodSelectorBase extends SubscribeMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() public _config?: EnergyPeriodSelectorPlusConfig;
  @property() public collectionKey?: string;
  @state() _startDate?: Date;
  @state() _endDate?: Date;
  @state() private _period?: 'day' | 'week' | 'month' | 'year' | 'custom';
  @state() private _compare = false;
  @state() private _lastSyncToEntityTimestamp = 0;
  @state() private _lastSyncFromEntityTimestamp = 0;
  @state() private _userActionTimestamp = 0;
  @state() private _isUserAction = false;
  @state() private _isProcessingClick = false;
  private _lastClickId = 0;
  private _clickDebounceTimer: number | null = null;

  public connectedCallback() {
    super.connectedCallback();
  }

  public disconnectedCallback() {
    super.disconnectedCallback();
  }

  async firstUpdated() {
    const helpers = await (window as any).loadCardHelpers();
    helpers.importMoreInfoControl('input_datetime'); // This is needed to render the datepicker!!!
    
    // Load button and selector components
    try {
      await helpers.importMoreInfoControl('button');
    } catch (error) {
      console.warn('Failed to load ha-button component:', error);
    }
    
    // Try to load selector components (might contain button-toggle functionality)
    try {
      await helpers.importMoreInfoControl('selector');
    } catch (error) {
      console.warn('Failed to load ha-selector component:', error);
    }
    
    // Try to load button-toggle-group through different methods
    const buttonToggleMethods = [
      'button-toggle-group',
      'ha-button-toggle-group', 
      'selector-button-toggle',
      'ha-selector-button-toggle'
    ];
    
    for (const method of buttonToggleMethods) {
      try {
        await helpers.importMoreInfoControl(method);
        break; // Stop after first successful load
      } catch (error) {
        console.warn(`Failed to load ${method}:`, error);
      }
    }
    
    // Load ha-button for today button text version (replaces deprecated mwc-button)
    try {
      await helpers.importMoreInfoControl('button');
    } catch (error) {
      console.warn('Failed to load ha-button component:', error);
    }
    
    // Try to style buttons after initial load
    setTimeout(() => {
      this._forceButtonStyling();
    }, 1000);
  }

  public hassSubscribe(): Array<UnsubscribeFunc | Promise<UnsubscribeFunc>> {
    const subscriptions: Array<UnsubscribeFunc | Promise<UnsubscribeFunc>> = [
      getEnergyDataCollection(this.hass, {
        key: this.collectionKey,
      }).subscribe(data => this._updateDates(data)),
    ];

    // Subscribe to sync entity if configured
    if (this._config?.sync_entity) {
      subscriptions.push(
        this.hass.connection.subscribeEvents(
          (ev) => this._handleEntityStateChange(ev),
          'state_changed'
        )
      );
    }

    return subscriptions;
  }

  protected render() {
    if (!this.hass || !this._startDate) {
      return nothing;
    }

    const computeToggleButtonLabel = (period: string) => {
      if (period === 'custom') {
        return this._config?.custom_period_label || localize(`toggleButtons.${period}`) || period;
      }
      return this.hass.localize(`ui.components.calendar.event.rrule.${period}`);
    };

    const periodButtons: ToggleButton[] = !this._config?.period_buttons
      ? [
          {
            label: this.hass.localize('ui.components.calendar.event.rrule.day'),
            value: 'day',
          },
          {
            label: this.hass.localize('ui.components.calendar.event.rrule.week'),
            value: 'week',
          },
          {
            label: this.hass.localize('ui.components.calendar.event.rrule.month'),
            value: 'month',
          },
          {
            label: this.hass.localize('ui.components.calendar.event.rrule.year'),
            value: 'year',
          },
        ]
      : this._config.period_buttons.map(period => {
          return {
            label: computeToggleButtonLabel(period),
            value: period,
          };
        });

    // Determines layout mode - defaults to 'standard' for backward compatibility
    const layoutMode = this._config?.layout_mode || 'standard';

    const dateRangePicker = html`
      <div class="date-range-container">
        <ha-date-input
          .locale=${this.hass.locale}
          .value=${this._startDate?.toISOString() || ''}
          .label=${this.hass.localize('ui.components.date-range-picker.start_date')}
          @value-changed=${this._startDateChanged}
          .required=${true}
          .min=${'2019-01-01'}
          .max=${this._endDate?.toISOString() || endOfToday().toISOString()}
        >
        </ha-date-input>
        <ha-date-input
          .locale=${this.hass.locale}
          .value=${this._endDate?.toISOString() || ''}
          .label=${this.hass.localize('ui.components.date-range-picker.end_date')}
          @value-changed=${this._endDateChanged}
          .required=${true}
          .min=${this._startDate.toISOString()}
          .max=${endOfToday().toISOString()}
        >
        </ha-date-input>
      </div>
    `;

    // Use custom HTML button for full control
    const todayButtonText = html` <button class="today-button-custom" @click=${this._pickToday}>
      ${this._config?.today_button_label || localize('toggleButtons.today')}
    </button>`;
    
    // Fallback today button if ha-button is not available
    const todayButtonTextFallback = html` <button class="today-button-fallback" @click=${this._pickToday}>
      ${this._config?.today_button_label || localize('toggleButtons.today')}
    </button>`;

    const todayButtonIcon = html` <ha-icon-button
      @click=${this._pickToday}
      class="today-icon"
      .label=${this._config?.today_button_label || localize('toggleButtons.today')}
      .path=${mdiCalendarTodayOutline}
    >
    </ha-icon-button>`;


    const todayButton =
      this._config?.today_button_type === false ? nothing : this._config?.today_button_type === 'icon' ? todayButtonIcon : 
      todayButtonText; // Use custom HTML button for full control

    // Renders compare button based on compare_button_type configuration
    const compareButton = this._config?.compare_button_type ? html`
      <div class="compare-button-row">
        ${this._config?.compare_button_type === 'icon'
          ? html`<ha-icon-button
              class="compare ${this._compare ? 'active' : ''}"
              .path=${this._compare ? mdiCompareRemove : mdiCompare}
              @click=${this._toggleCompare}
              dense
              outlined
            >
              ${this._config.compare_button_label ?? this.hass.localize('ui.panel.lovelace.components.energy_period_selector.compare')}
            </ha-icon-button>`
              : this._config?.compare_button_type === 'text'
              ? html`<button class="compare-button-custom ${this._compare ? 'active' : ''}" @click=${this._toggleCompare}>
                  ${this._config.compare_button_label ?? this.hass.localize('ui.panel.lovelace.components.energy_period_selector.compare')}
                </button>`
            : nothing}
      </div>
    ` : nothing;

    // Renders period buttons
    const periodButtonsSection = html`
      <div class="period-buttons-row">
        ${this._renderPeriodButtons(periodButtons)}
      </div>
    `;

    // Renders date controls
    const dateControlsSection = html`
      <div class="date-controls-row">
        ${this._period === 'custom'
          ? dateRangePicker
          : html`
              <div class="date-display">
                ${this._period === 'day'
                  ? formatDate(this._startDate, this.hass.locale)
                  : this._period === 'month'
                  ? formatDateMonthYear(this._startDate, this.hass.locale)
                  : this._period === 'year'
                  ? formatDateYear(this._startDate, this.hass.locale)
                  : `${formatDateShort(this._startDate, this.hass.locale)} – ${formatDateShort(this._endDate || new Date(), this.hass.locale)}`}
              </div>
              <div class="navigation-controls">
                ${this._config?.prev_next_buttons !== false
                  ? html`
                      <ha-icon-button-prev
                        .label=${this.hass.localize('ui.panel.lovelace.components.energy_period_selector.previous')}
                        @click=${this._pickPrevious}
                      ></ha-icon-button-prev>
                      <ha-icon-button-next
                        .label=${this.hass.localize('ui.panel.lovelace.components.energy_period_selector.next')}
                        @click=${this._pickNext}
                      ></ha-icon-button-next>
                    `
                  : nothing}
                ${todayButton}
              </div>
            `}
      </div>
    `;

    // Renders main content based on layout mode
    const cssClasses = [
      'energy-period-selector',
      layoutMode === 'compact' ? 'compact-mode' : 'standard-mode'
    ].filter(Boolean).join(' ');

    // Default layout: button group above (period buttons on top, date controls below)
    // Both sections are right-aligned
    return html`
      <div class="${cssClasses}">
        ${compareButton}
        ${periodButtonsSection}
        ${dateControlsSection}
      </div>
    `;
  }

  public _startDateChanged(ev: CustomEvent): void {
    this._setDate(new Date(ev.detail.value));
  }

  public _endDateChanged(ev: CustomEvent): void {
    if (this._startDate && new Date(ev.detail.value) > this._startDate) {
      this._setDate(this._startDate, new Date(ev.detail.value));
    }
  }

  private _handleView(ev: CustomEvent): void {
    this._period = ev.detail.value;
    const today = startOfToday();
    const start =
      !this._startDate ||
      isWithinInterval(today, {
        start: this._startDate,
        end: this._endDate || endOfToday(),
      })
        ? today
        : this._startDate;

    const weekStartsOn = firstWeekdayIndex(this.hass.locale);

    this._setDate(
      this._period === 'day'
        ? startOfDay(start)
        : this._period === 'week'
        ? startOfWeek(start, { weekStartsOn })
        : this._period === 'month'
        ? startOfMonth(start)
        : this._period === 'year'
        ? startOfYear(start)
        : this._startDate || startOfToday(),
      this._period === 'custom' ? this._endDate : undefined,
    );
  }

  private _pickToday() {
    const weekStartsOn = firstWeekdayIndex(this.hass.locale);

    this._setDate(
      this._period === 'day'
        ? startOfToday()
        : this._period === 'week'
        ? startOfWeek(new Date(), { weekStartsOn })
        : this._period === 'month'
        ? startOfMonth(new Date())
        : startOfYear(new Date()),
    );
  }

  private _pickPrevious() {
    const clickId = ++this._lastClickId;
    
    // Clear any existing debounce timer
    if (this._clickDebounceTimer) {
      clearTimeout(this._clickDebounceTimer);
    }
    
    // Debounce fast clicks by 300ms
    this._clickDebounceTimer = window.setTimeout(() => {
      this._processPickPrevious(clickId);
    }, 300);
  }
  
  private _processPickPrevious(clickId: number) {
    // Check if we're already processing a click
    if (this._isProcessingClick) {
      return;
    }
    
    this._isProcessingClick = true;
    
    // Calculate the new date
    const newStart =
      this._period === 'day'
        ? addDays(this._startDate!, -1)
        : this._period === 'week'
        ? addWeeks(this._startDate!, -1)
        : this._period === 'month'
        ? addMonths(this._startDate!, -1)
        : this._period === 'year'
        ? addYears(this._startDate!, -1)
        : addDays(this._startDate!, -1);
    
    // Check if the date is actually different
    if (this._startDate && Math.abs(newStart.getTime() - this._startDate.getTime()) < 1000) {
      this._isProcessingClick = false;
      return;
    }
    this._userActionTimestamp = Date.now();
    this._isUserAction = true;
    this._setDate(newStart);
    
    // Clear processing flag after a delay
    setTimeout(() => {
      this._isProcessingClick = false;
    }, 500);
  }

  private _pickNext() {
    const clickId = ++this._lastClickId;
    
    // Clear any existing debounce timer
    if (this._clickDebounceTimer) {
      clearTimeout(this._clickDebounceTimer);
    }
    
    // Debounce fast clicks by 300ms
    this._clickDebounceTimer = window.setTimeout(() => {
      this._processPickNext(clickId);
    }, 300);
  }
  
  private _processPickNext(clickId: number) {
    // Check if we're already processing a click
    if (this._isProcessingClick) {
      return;
    }
    
    this._isProcessingClick = true;
    
    // Calculate the new date
    const newStart =
      this._period === 'day'
        ? addDays(this._startDate!, 1)
        : this._period === 'week'
        ? addWeeks(this._startDate!, 1)
        : this._period === 'month'
        ? addMonths(this._startDate!, 1)
        : this._period === 'year'
        ? addYears(this._startDate!, 1)
        : addDays(this._startDate!, 1);
    
    // Check if the date is actually different
    if (this._startDate && Math.abs(newStart.getTime() - this._startDate.getTime()) < 1000) {
      this._isProcessingClick = false;
      return;
    }
    this._userActionTimestamp = Date.now();
    this._isUserAction = true;
    this._setDate(newStart);
    
    // Clear processing flag after a delay
    setTimeout(() => {
      this._isProcessingClick = false;
    }, 500);
  }

  private _setDate(startDate: Date, customEndDate?: Date, skipEntitySync = false) {
    // Update the start date immediately to prevent race conditions
    this._startDate = startDate;
    
    const weekStartsOn = firstWeekdayIndex(this.hass.locale);

    const endDate: Date =
      this._period === 'day'
        ? endOfDay(startDate)
        : this._period === 'week'
        ? endOfWeek(startDate, { weekStartsOn })
        : this._period === 'month'
        ? endOfMonth(startDate)
        : this._period === 'year'
        ? endOfYear(startDate)
        : this._period === 'custom' && customEndDate
        ? endOfDay(customEndDate)
        : this._endDate || endOfToday();

    const energyCollection = getEnergyDataCollection(this.hass, {
      key: this.collectionKey,
    });
    energyCollection.setPeriod(startDate, endDate);
    energyCollection.refresh();

    // Sync to entity if configured and not skipping
    if (!skipEntitySync) {
      this._syncToEntity();
    }
  }

  private _updateDates(energyData: EnergyData): void {
    this._compare = energyData.startCompare !== undefined;
    this._startDate = energyData.start;
    this._endDate = energyData.end || endOfToday();
    const dayDifference = differenceInDays(this._endDate, this._startDate || endOfToday());
    this._period =
      this._period !== 'custom'
        ? dayDifference < 1
          ? 'day'
          : dayDifference === 6
          ? 'week'
          : dayDifference > 26 && dayDifference < 31 // 28, 29, 30 or 31 days in a month
          ? 'month'
          : dayDifference === 364 || dayDifference === 365 // Leap year
          ? 'year'
          : 'custom'
        : 'custom';
  }

  private _toggleCompare() {
    this._compare = !this._compare;
    const energyCollection = getEnergyDataCollection(this.hass, {
      key: this.collectionKey,
    });
    energyCollection.setCompare(this._compare);
    energyCollection.refresh();
  }

  private _handleEntityStateChange(ev: any): void {
    if (!this._config?.sync_entity || ev.data.entity_id !== this._config.sync_entity) {
      return;
    }
    

    const syncDirection = this._config.sync_direction || 'both';
    if (syncDirection !== 'from-entity' && syncDirection !== 'both') {
      return;
    }

    // Prevent sync loops with timestamp guard
    const now = Date.now();
    if (now - this._lastSyncFromEntityTimestamp < 500) {
      return;
    }

    // Ignore entity changes that happen too soon after a user action
    if (now - this._userActionTimestamp < 1000) {
      return;
    }

    // Ignore entity changes if we're in the middle of a user action
    if (this._isUserAction) {
      return;
    }

    const newState = ev.data.new_state;
    if (!newState || !newState.attributes) {
      return;
    }

    // Parse the entity date/time value
    const entityDate = this._parseEntityDateTime(newState);
    if (!entityDate) {
      return;
    }

    // Check if the entity date is actually different from current component date
    if (this._startDate && Math.abs(entityDate.getTime() - this._startDate.getTime()) < 1000) {
      return;
    }

    // Update the selector to match the entity
    this._lastSyncFromEntityTimestamp = now;
    this._setDate(entityDate, undefined, true); // Skip entity sync to prevent loops
  }

  private _parseEntityDateTime(state: any): Date | null {
    try {
      // Handle input_datetime entities
      if (state.attributes.has_date && state.attributes.has_time) {
        const dateStr = state.attributes.year + '-' + 
          String(state.attributes.month).padStart(2, '0') + '-' + 
          String(state.attributes.day).padStart(2, '0');
        const timeStr = String(state.attributes.hour).padStart(2, '0') + ':' + 
          String(state.attributes.minute).padStart(2, '0') + ':00';
        return new Date(dateStr + 'T' + timeStr);
      } else if (state.attributes.has_date) {
        const dateStr = state.attributes.year + '-' + 
          String(state.attributes.month).padStart(2, '0') + '-' + 
          String(state.attributes.day).padStart(2, '0');
        return new Date(dateStr + 'T00:00:00');
      }
      
      // Handle string date values
      if (typeof state.state === 'string') {
        const parsed = new Date(state.state);
        if (!isNaN(parsed.getTime())) {
          return parsed;
        }
      }
      
      return null;
    } catch (error) {
      console.warn('Failed to parse entity date:', error);
      return null;
    }
  }

  private _syncToEntity(): void {
    if (!this._config?.sync_entity || !this._startDate) {
      return;
    }

    const syncDirection = this._config.sync_direction || 'both';
    if (syncDirection !== 'to-entity' && syncDirection !== 'both') {
      return;
    }

    // Prevent sync loops with timestamp guard
    const now = Date.now();
    if (now - this._lastSyncToEntityTimestamp < 500) {
      return;
    }

    this._lastSyncToEntityTimestamp = now;

    // Format the date for the entity
    const entityDate = this._formatDateForEntity(this._startDate);
    if (!entityDate) {
      return;
    }

    // Call Home Assistant service to update the entity
    this.hass.callService('input_datetime', 'set_datetime', {
      entity_id: this._config.sync_entity,
      ...entityDate
    }).then(() => {
      // Clear user action flag after successful sync
      setTimeout(() => {
        this._isUserAction = false;
      }, 2000);
    }).catch(error => {
      console.warn('Failed to sync date to entity:', error);
      // Clear user action flag even on error
      this._isUserAction = false;
    });
  }

  private _formatDateForEntity(date: Date): any | null {
    try {
      // Format date for input_datetime.set_datetime service
      // Use datetime parameter instead of individual components
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hour = String(date.getHours()).padStart(2, '0');
      const minute = String(date.getMinutes()).padStart(2, '0');
      
      return {
        datetime: `${year}-${month}-${day} ${hour}:${minute}:00`
      };
    } catch (error) {
      console.warn('Failed to format date for entity:', error);
      return null;
    }
  }

  private _renderPeriodButtons(periodButtons: any[]) {
    // Always use custom HTML buttons for full control
    return html`
      <div class="period-buttons-custom">
        ${periodButtons.map(button => html`
          <button
            .value=${button.value}
            @click=${() => this._handleView({ detail: { value: button.value } } as CustomEvent)}
            class="period-button-custom ${this._period === button.value ? 'active' : ''}"
          >
            ${button.label}
          </button>
        `)}
      </div>
    `;
  }

  private _onSelectorUpdated() {
    // Force styling after selector updates
    this._forceButtonStyling();
    
    // Also try again after a longer delay in case elements aren't ready
    setTimeout(() => {
      this._forceButtonStyling();
    }, 500);
  }

  private _forceButtonStyling() {
    setTimeout(() => {
      // Style period selector buttons
      const selector = this.shadowRoot?.querySelector('ha-selector');
      if (selector) {
        const buttons = selector.querySelectorAll('mwc-button');
        buttons.forEach(button => {
          (button as any).style.setProperty('--mdc-button-height', '20px', 'important');
          (button as any).style.setProperty('--mdc-button-min-width', '40px', 'important');
          (button as any).style.setProperty('--mdc-typography-button-font-size', '11px', 'important');
          (button as any).style.setProperty('--mdc-typography-button-font-weight', '500', 'important');
          (button as any).style.setProperty('--mdc-typography-button-text-transform', 'uppercase', 'important');
          (button as any).style.setProperty('--mdc-button-outline-color', '#202124', 'important');
          (button as any).style.setProperty('--mdc-theme-primary', '#d2d3d3', 'important');
          (button as any).style.height = '20px';
          (button as any).style.minWidth = '40px';
          (button as any).style.fontSize = '11px';
          (button as any).style.fontWeight = '500';
          (button as any).style.textTransform = 'uppercase';
          (button as any).style.border = '1px solid #202124';
        });
      }
      
      // Style navigation arrow buttons
      const arrowButtons = this.shadowRoot?.querySelectorAll('.navigation-controls ha-icon-button, .navigation-controls ha-icon-button-prev, .navigation-controls ha-icon-button-next');
      
      arrowButtons?.forEach((button) => {
        (button as any).style.setProperty('--mdc-icon-button-size', '20px', 'important');
        (button as any).style.height = '20px';
        (button as any).style.width = '20px';
        (button as any).style.minHeight = '20px';
        (button as any).style.minWidth = '20px';
        (button as any).style.maxHeight = '20px';
        (button as any).style.maxWidth = '20px';
        (button as any).style.padding = '0';
        (button as any).style.margin = '0';
        (button as any).style.lineHeight = '20px';
        (button as any).style.display = 'inline-flex';
        (button as any).style.alignItems = 'center';
        (button as any).style.justifyContent = 'center';
        (button as any).style.verticalAlign = 'middle';
        (button as any).style.position = 'relative';
        (button as any).style.top = '0';
        (button as any).style.transform = 'none';
        (button as any).style.border = 'none';
        (button as any).style.outline = 'none';
        (button as any).style.boxShadow = 'none';
        
        // Style internal button elements
        const internalButtons = button.querySelectorAll('button, mwc-icon-button, .mdc-icon-button');
        internalButtons.forEach((internalButton) => {
          (internalButton as any).style.height = '20px';
          (internalButton as any).style.width = '20px';
          (internalButton as any).style.minHeight = '20px';
          (internalButton as any).style.minWidth = '20px';
          (internalButton as any).style.maxHeight = '20px';
          (internalButton as any).style.maxWidth = '20px';
          (internalButton as any).style.padding = '0';
          (internalButton as any).style.margin = '0';
          (internalButton as any).style.display = 'inline-flex';
          (internalButton as any).style.alignItems = 'center';
          (internalButton as any).style.justifyContent = 'center';
          (internalButton as any).style.verticalAlign = 'middle';
          (internalButton as any).style.setProperty('--mdc-icon-button-size', '20px', 'important');
        });
      });
    }, 100);
  }

  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    // Force styling after updates
    this._onSelectorUpdated();
  }

  static styles = stylesBase;
}

declare global {
  interface HTMLElementTagNameMap {
    'energy-period-selector-base': EnergyPeriodSelectorBase;
  }
}
