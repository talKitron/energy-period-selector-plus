import { LovelaceCardConfig } from 'custom-card-helpers';
import { EnergyCardBaseConfig } from './type/energy-card-base-config';

export interface EnergyPeriodSelectorPlusConfig extends LovelaceCardConfig, EnergyCardBaseConfig {
  card_background?: boolean;
  prev_next_buttons?: boolean;
  compare_button_type?: string;
  compare_button_label?: string;
  today_button_type?: string | boolean;
  period_buttons?: string[];
  custom_period_label?: string;
  sync_entity?: string;
  sync_direction?: 'to-entity' | 'from-entity' | 'both';
  layout_mode?: 'standard' | 'compact';
}
