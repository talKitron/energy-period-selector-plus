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
  sync_start_entity?: string;
  sync_end_entity?: string;
  layout_mode?: 'standard' | 'compact' | 'wide';
  /** Density of controls: compact (tighter), normal (preset default), comfortable (roomier). */
  density?: 'compact' | 'normal' | 'comfortable';
  /** Width of the period button group: auto (content-based) or full (stretch across available space). */
  button_group_width?: 'auto' | 'full';
  /** Optional pixel override for button font size. Takes precedence over preset. */
  button_font_size?: number;
  /** Optional pixel override for date display font size. Takes precedence over preset. */
  date_font_size?: number;
  /** Optional pixel override for button minimum width. Takes precedence over preset. */
  button_min_width?: number;
  /** Optional pixel override for gap between elements. Takes precedence over preset. */
  gap?: number;
}
