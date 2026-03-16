/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */

import { mdiClose, mdiReload } from '@mdi/js';
import { LitElement, css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { fireEvent, HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { assert, assign, boolean, object, optional, string, any } from 'superstruct';
import memoizeOne from 'memoize-one';

import { localize } from '../localize/localize';
import { EnergyPeriodSelectorPlusConfig } from '../energy-period-selector-plus-config';
import { EnergyCardBaseConfig } from '../type/energy-card-base-config';
import { SchemaUnion } from './types/schema-union';

export const loadHaForm = async () => {
  if (customElements.get('ha-form')) return;

  const helpers = await (window as any).loadCardHelpers?.();
  if (!helpers) return;
  const card = await helpers.createCardElement({ type: 'entity' });
  if (!card) return;
  await card.getConfigElement();
};

@customElement('energy-period-selector-editor')
export class EnergyPeriodSelectorEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: EnergyPeriodSelectorPlusConfig;

  public async setConfig(config: EnergyPeriodSelectorPlusConfig): Promise<void> {
    assert(
      config,
      assign(
        object({
          type: string(),
          view_layout: optional(string()),
        }),
        object({
          card_background: optional(boolean()),
          today_button: optional(boolean()),
          prev_next_buttons: optional(boolean()),
          compare_button_type: optional(string()),
          today_button_type: optional(any()),
          period_buttons: optional(any()),
          custom_period_label: optional(string()),
          compare_button_label: optional(string()),
          sync_entity: optional(string()),
          sync_direction: optional(string()),
          sync_start_entity: optional(string()),
          sync_end_entity: optional(string()),
          layout_mode: optional(string()),
          density: optional(string()),
          button_group_width: optional(string()),
          button_font_size: optional(any()),
          icon_button_size: optional(any()),
          date_font_size: optional(any()),
          button_min_width: optional(any()),
          gap: optional(any()),
        })
      )
    );

    this._config = config;
  }

  connectedCallback(): void {
    super.connectedCallback();
    loadHaForm();
  }

  private _schema = memoizeOne(
    (showCompareLabel: boolean, showCustomPeriodLabel: boolean) =>
      [
        {
          type: 'grid',
          name: '',
          schema: [
            {
              name: 'card_background',
              selector: { boolean: {} },
            },
            {
              name: 'prev_next_buttons',
              selector: { boolean: {} },
            },
          ],
        },
        {
          name: 'density',
          required: true,
          selector: {
            select: {
              options: [
                { value: 'normal', label: localize('editor.fields.density_options.normal') },
                { value: 'compact', label: localize('editor.fields.density_options.compact') },
                { value: 'comfortable', label: localize('editor.fields.density_options.comfortable') },
              ],
              mode: 'dropdown',
            },
          },
        },
        {
          name: 'button_group_width',
          required: true,
          selector: {
            select: {
              options: [
                { value: 'auto', label: localize('editor.fields.button_group_width_options.auto') },
                { value: 'full', label: localize('editor.fields.button_group_width_options.full') },
              ],
              mode: 'dropdown',
            },
          },
        },
        {
          type: 'grid',
          name: '',
          schema: [
            {
              name: 'button_font_size',
              required: true,
              selector: { number: { min: 1, mode: 'box' } },
            },
            {
              name: 'icon_button_size',
              required: true,
              selector: { number: { min: 1, mode: 'box' } },
            },
            {
              name: 'date_font_size',
              required: true,
              selector: { number: { min: 1, mode: 'box' } },
            },
            {
              name: 'button_min_width',
              required: true,
              selector: { number: { min: 1, mode: 'box' } },
            },
            {
              name: 'gap',
              required: true,
              selector: { number: { min: 0, mode: 'box' } },
            },
          ],
        },
        {
          type: 'grid',
          name: '',
          schema: [
            {
              name: 'compare_button_type',
              required: true,
              selector: {
                select: {
                  options: [
                    { value: 'none', label: localize('editor.fields.button_type_options.none') },
                    { value: 'icon', label: localize('editor.fields.compare_button_options.icon') },
                    { value: 'text', label: localize('editor.fields.compare_button_options.text') },
                  ],
                  mode: 'dropdown',
                },
              },
            },
            ...(showCompareLabel
              ? ([
                  {
                    name: 'compare_button_label',
                    selector: { text: {} },
                  },
                ] as const)
              : []),
          ],
        },
        {
          name: 'today_button_type',
          required: true,
          selector: {
            select: {
              options: [
                { value: 'none', label: localize('editor.fields.button_type_options.none') },
                { value: 'icon', label: localize('editor.fields.compare_button_options.icon') },
                { value: 'text', label: localize('editor.fields.compare_button_options.text') },
              ],
              mode: 'dropdown',
            },
          },
        },
        {
          type: 'grid',
          name: '',
          schema: [
            {
              type: 'multi_select',
              options: {
                day: localize('editor.fields.period_buttons_options.day'),
                week: localize('editor.fields.period_buttons_options.week'),
                month: localize('editor.fields.period_buttons_options.month'),
                year: localize('editor.fields.period_buttons_options.year'),
                custom: localize('editor.fields.period_buttons_options.custom'),
              },
              name: 'period_buttons',
              default: ['day', 'week', 'month', 'year'],
            },
            ...(showCustomPeriodLabel
              ? ([
                  {
                    name: 'custom_period_label',
                    selector: { text: {} },
                  },
                ] as const)
              : []),
          ],
        },

        // NOTE: We intentionally do NOT include the sync row here.
        // It is rendered manually to keep both labels above the inputs.
      ] as const
  );

  protected render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const data: EnergyPeriodSelectorPlusConfig = {
      ...this._config,
      card_background: this._config.card_background ?? false,
      today_button: this._config.today_button ?? true,
      prev_next_buttons: this._config.prev_next_buttons ?? true,
      compare_button_type: this._config.compare_button_type ?? '',
      today_button_type: this._config.today_button_type ?? 'text',
      period_buttons: this._config.period_buttons ?? ['day', 'week', 'month', 'year'],
      sync_entity: this._config.sync_entity ?? '',
      sync_direction: this._config.sync_direction ?? 'both',
      sync_start_entity: this._config.sync_start_entity ?? '',
      sync_end_entity: this._config.sync_end_entity ?? '',
      layout_mode: this._config.layout_mode ?? 'standard',
      density: this._config.density ?? 'normal',
      button_group_width: this._config.button_group_width ?? 'auto',
      button_font_size: this._config.button_font_size ?? undefined,
      icon_button_size: this._config.icon_button_size ?? undefined,
      date_font_size: this._config.date_font_size ?? undefined,
      button_min_width: this._config.button_min_width ?? undefined,
      gap: this._config.gap ?? undefined,
    };

    const fullSchema = this._schema(
      data.compare_button_type === 'text',
      (data.period_buttons ?? []).includes('custom')
    );

    const [topSchema, ...restSchema] = fullSchema;

    return html`
      <!-- Top switches: card_background + prev_next_buttons -->
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${[topSchema]}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <!-- Layout preset selector + reload, directly under top switches -->
      <div class="layout-row">
        <ha-selector
          .hass=${this.hass}
          .selector=${{
            select: {
              options: [
                { value: 'standard', label: localize('editor.fields.layout_mode_options.standard') },
                { value: 'compact', label: localize('editor.fields.layout_mode_options.compact') },
                { value: 'wide', label: localize('editor.fields.layout_mode_options.wide') },
              ],
              mode: 'dropdown',
            },
          }}
          .label=${localize('editor.fields.layout_mode') || 'Layout Mode'}
          .value=${this._config?.layout_mode ?? 'standard'}
          @value-changed=${(e: CustomEvent) => this._onLayoutModeChanged(e.detail.value)}
        ></ha-selector>
        <ha-icon-button
          class="layout-reset-button"
          .label=${'Reload Layout Mode'}
          .path=${mdiReload}
          @click=${this._resetAdvancedAppearance}
        ></ha-icon-button>
      </div>

      <!-- Rest of the config fields -->
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${restSchema}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <div class="sync-container">
        ${this._renderSyncRow(data)}
      </div>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev?.detail.value as EnergyPeriodSelectorPlusConfig;
    fireEvent(this, 'config-changed', { config });
  }

  private _computeLabelCallback = (schema: any) => {
    return localize(`editor.fields.${schema.name}`) || `not found: ${schema.name}`;
  };

  /**
   * Renders the sync fields manually to achieve proper two-column layout
   * with labels above inputs, which isn't possible with ha-form schema alone.
   * Adds clear (X) buttons when a value is set; disables the other mode's
   * inputs when one is in use; shows a warning whenever any sync input is filled.
   */
  private _renderSyncRow(data: EnergyPeriodSelectorPlusConfig) {
    const syncEntity = (data.sync_entity ?? '').trim();
    const syncStartEntity = (data.sync_start_entity ?? '').trim();
    const syncEndEntity = (data.sync_end_entity ?? '').trim();
    const hasSingleSync = syncEntity !== '';
    const hasRangeSync = syncStartEntity !== '' || syncEndEntity !== '';
    const showSyncWarning = hasSingleSync || hasRangeSync;
    const isConflict = hasSingleSync && hasRangeSync;

    return html`
      <div class="two-col">
        <div class="field">
          <div class="caption">${localize('editor.fields.sync_entity')}</div>
          <div class="entity-selector-with-clear">
            <ha-selector
              class="entity-selector"
              .hass=${this.hass}
              .selector=${{ entity: { domain: ['input_datetime'] } }}
              .value=${data.sync_entity ?? ''}
              ?disabled=${hasRangeSync}
              @value-changed=${(e: CustomEvent) => this._patch('sync_entity', e.detail.value || '')}
            ></ha-selector>
            ${syncEntity
              ? html`
                  <ha-icon-button
                    class="selector-clear"
                    .label=${localize('editor.fields.sync_clear')}
                    .path=${mdiClose}
                    @click=${(e: Event) => { e.stopPropagation(); this._patch('sync_entity', ''); }}
                  ></ha-icon-button>
                `
              : nothing}
          </div>
        </div>

        <div class="field">
          <div class="caption">${localize('editor.fields.sync_direction')}</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${{
              select: {
                options: [
                  { value: 'both', label: localize('editor.fields.sync_direction_options.both') },
                  { value: 'to-entity', label: localize('editor.fields.sync_direction_options.to_entity') },
                  { value: 'from-entity', label: localize('editor.fields.sync_direction_options.from_entity') },
                ],
                mode: 'dropdown',
              },
            }}
            .value=${data.sync_direction ?? 'both'}
            ?disabled=${hasRangeSync || !hasSingleSync}
            @value-changed=${(e: CustomEvent) => this._patch('sync_direction', e.detail.value)}
          ></ha-selector>
        </div>
      </div>

      ${showSyncWarning
        ? html`
            <div class="sync-warning ${isConflict ? 'sync-warning--conflict' : ''}" role="alert">
              ${localize('editor.sync_mutual_exclusion_warning')}
            </div>
          `
        : nothing}

      <div class="two-col">
        <div class="field">
          <div class="caption">${localize('editor.fields.sync_start_entity')}</div>
          <div class="entity-selector-with-clear">
            <ha-selector
              class="entity-selector"
              .hass=${this.hass}
              .selector=${{ entity: { domain: ['input_datetime'] } }}
              .value=${data.sync_start_entity ?? ''}
              ?disabled=${hasSingleSync}
              @value-changed=${(e: CustomEvent) => this._patch('sync_start_entity', e.detail.value || '')}
            ></ha-selector>
            ${syncStartEntity
              ? html`
                  <ha-icon-button
                    class="selector-clear"
                    .label=${localize('editor.fields.sync_clear')}
                    .path=${mdiClose}
                    @click=${(e: Event) => { e.stopPropagation(); this._patch('sync_start_entity', ''); }}
                  ></ha-icon-button>
                `
              : nothing}
          </div>
        </div>

        <div class="field">
          <div class="caption">${localize('editor.fields.sync_end_entity')}</div>
          <div class="entity-selector-with-clear">
            <ha-selector
              class="entity-selector"
              .hass=${this.hass}
              .selector=${{ entity: { domain: ['input_datetime'] } }}
              .value=${data.sync_end_entity ?? ''}
              ?disabled=${hasSingleSync}
              @value-changed=${(e: CustomEvent) => this._patch('sync_end_entity', e.detail.value || '')}
            ></ha-selector>
            ${syncEndEntity
              ? html`
                  <ha-icon-button
                    class="selector-clear"
                    .label=${localize('editor.fields.sync_clear')}
                    .path=${mdiClose}
                    @click=${(e: Event) => { e.stopPropagation(); this._patch('sync_end_entity', ''); }}
                  ></ha-icon-button>
                `
              : nothing}
          </div>
        </div>
      </div>
    `;
  }

  private _onLayoutModeChanged(newLayout: 'standard' | 'compact' | 'wide'): void {
    if (!this._config) return;
    const base = this._getLayoutDefaults(newLayout);
    const config: EnergyPeriodSelectorPlusConfig = {
      ...this._config,
      layout_mode: newLayout,
      button_font_size: base.button_font_size,
      icon_button_size: base.icon_button_size,
      date_font_size: base.date_font_size,
      button_min_width: base.button_min_width,
      gap: base.gap,
    };
    this._config = config;
    fireEvent(this, 'config-changed', { config });
  }

  private _getLayoutDefaults(layoutMode: string) {
    if (layoutMode === 'compact') {
      return { button_font_size: 10, icon_button_size: 20, date_font_size: 12, button_min_width: 35, gap: 4 };
    }
    if (layoutMode === 'wide') {
      return { button_font_size: 13, icon_button_size: 26, date_font_size: 18, button_min_width: 56, gap: 12 };
    }
    return { button_font_size: 11, icon_button_size: 20, date_font_size: 16, button_min_width: 40, gap: 8 };
  }

  private _resetAdvancedAppearance(): void {
    if (!this._config) return;
    const layoutMode = this._config.layout_mode ?? 'standard';
    const base = this._getLayoutDefaults(layoutMode);
    const config: EnergyPeriodSelectorPlusConfig = {
      ...this._config,
      button_font_size: base.button_font_size,
      icon_button_size: base.icon_button_size,
      date_font_size: base.date_font_size,
      button_min_width: base.button_min_width,
      gap: base.gap,
    };
    fireEvent(this, 'config-changed', { config });
  }


  // Light helper to update config and notify Lovelace
  private _patch<K extends keyof EnergyPeriodSelectorPlusConfig>(key: K, value: EnergyPeriodSelectorPlusConfig[K]) {
    this._config = { ...this._config!, [key]: value };
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles() {
    return css`
      ha-form {
        width: 100%;
      }

      ha-icon-button {
        align-self: center;
      }

      .card-config {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }

      .config-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .config-header.sub-header {
        margin-top: 24px;
      }

      ha-icon {
        padding-bottom: 2px;
        position: relative;
        top: -4px;
        right: 1px;
      }

      /* Custom row layout */
      .two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 12px;
      }
      .field {
        width: 100%;
      }
      .caption {
        font-size: var(--mdc-typography-caption-font-size, 0.875rem);
        color: var(--secondary-text-color);
        margin: 0 0 6px 0;
      }
      .entity-selector-with-clear {
        position: relative;
        width: 100%;
      }
      .entity-selector-with-clear .entity-selector {
        width: 100%;
      }
      .entity-selector-with-clear .selector-clear {
        position: absolute;
        right: 32px;
        top: 50%;
        transform: translateY(-50%);
        --mdc-icon-button-size: 28px;
        color: var(--secondary-text-color);
      }
      .sync-warning {
        margin-top: 12px;
        padding: 0;
        background: none;
        color: var(--warning-color, #f9a825);
        font-size: 0.875rem;
      }
      .sync-warning.sync-warning--conflict {
        color: var(--error-color, #f44336);
      }
      ha-select,
      ha-entity-picker {
        width: 100%;
      }
      .layout-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
      }
      .layout-row ha-selector {
        flex: 1;
      }
      .layout-reset-button {
        flex: 0 0 auto;
      }
      .sync-container {
        min-height: 180px;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'energy-period-selector-editor': EnergyPeriodSelectorEditor;
  }
}
