/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */

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
          layout_mode: optional(string()),
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
          name: 'layout_mode',
          selector: {
            select: {
              options: [
                { value: 'standard', label: localize('editor.fields.layout_mode_options.standard') },
                { value: 'compact', label: localize('editor.fields.layout_mode_options.compact') },
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
              name: 'compare_button_type',
              selector: {
                select: {
                  options: [
                    { value: '', label: '' },
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
          selector: {
            select: {
              options: [
                { value: false, label: '' },
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
      layout_mode: this._config.layout_mode ?? 'standard',
    };

    const schema = this._schema(
      data.compare_button_type === 'text',
      (data.period_buttons ?? []).includes('custom')
    );

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>

      ${this._renderSyncRow(data)}
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev?.detail.value;
    fireEvent(this, 'config-changed', { config });
  }

  private _computeLabelCallback = (schema: any) => {
    return localize(`editor.fields.${schema.name}`) || `not found: ${schema.name}`;
  };

  /**
   * Renders the sync fields manually to achieve proper two-column layout
   * with labels above inputs, which isn't possible with ha-form schema alone
   */
  private _renderSyncRow(data: EnergyPeriodSelectorPlusConfig) {
    return html`
      <div class="two-col">
        <div class="field">
          <div class="caption">${localize('editor.fields.sync_entity')}</div>
          <ha-selector
            .hass=${this.hass}
            .selector=${{ entity: { domain: ['input_datetime'] } }}
            .value=${data.sync_entity ?? ''}
            @value-changed=${(e: CustomEvent) => this._patch('sync_entity', e.detail.value || '')}
          ></ha-selector>
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
            @value-changed=${(e: CustomEvent) => this._patch('sync_direction', e.detail.value)}
          ></ha-selector>
        </div>
      </div>
    `;
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
      ha-select,
      ha-entity-picker {
        width: 100%;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'energy-period-selector-editor': EnergyPeriodSelectorEditor;
  }
}
