import { css } from 'lit';

export const styles = css`
  ha-card {
    padding: 1rem;
  }
  h1 {
    padding: 0;
    padding-bottom: 1rem;
  }
`;

export const stylesBase = css`
  .date-range-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 342px;
    gap: 1rem;
  }
  
  /* Compact layout mode: padding and row overrides (gap comes from --epsp-gap). */
  .energy-period-selector.compact-mode {
    padding: 0;
  }
  
  .energy-period-selector.compact-mode .period-buttons-row {
    margin-bottom: 0;
    align-items: center;
  }
  
  .energy-period-selector.compact-mode .date-controls-row {
    margin-top: 0;
  }
  
  
  /* Common compact button sizing */
  .compact-button-18px {
    height: 18px;
    min-width: 35px;
    padding: 2px 6px;
    font-size: 10px;
    vertical-align: middle;
  }

  /* Compact button sizing: uses --epsp-* vars; only layout tweaks here. */
  .energy-period-selector.compact-mode .period-button-custom,
  .energy-period-selector.compact-mode .today-button-custom {
    vertical-align: middle;
  }
  
  .energy-period-selector.compact-mode .compare-button-custom {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.25rem;
    vertical-align: middle;
  }
  
  /* Compact navigation controls */
  .energy-period-selector.compact-mode .navigation-controls {
    gap: 0.125rem;
    align-items: center;
    display: flex;
  }
  
  .energy-period-selector.compact-mode .navigation-controls ha-icon-button,
  .energy-period-selector.compact-mode .navigation-controls ha-icon-button-prev,
  .energy-period-selector.compact-mode .navigation-controls ha-icon-button-next {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
  }
  
  /* Common icon button sizing - 20px */
  .icon-button-20px {
    --mdc-icon-button-size: 20px !important;
    height: 20px !important;
    width: 20px !important;
    min-height: 20px !important;
    min-width: 20px !important;
    max-height: 20px !important;
    max-width: 20px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    line-height: 20px !important;
  }

  /* Compact today and compare icons */
  .energy-period-selector.compact-mode .today-icon,
  .energy-period-selector.compact-mode .compare {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    line-height: var(--epsp-nav-icon-size) !important;
  }
  
  /* Date display base styling */
  .date-display {
    color: var(--primary-text-color, #000000) !important;
  }

  /* Compact date display (font-size from --epsp-date-font-size). */
  .energy-period-selector.compact-mode .date-display {
    font-weight: 400;
  }
  
  .mdc-text-field__icon .mdc-text-field__icon--trailing {
    padding-left: 0;
  }

  /* Layout tokens: presets set these; shared rules use var(). Standard baseline. */
  .energy-period-selector {
    --epsp-button-font-size: 11px;
    --epsp-date-font-size: 16px;
    --epsp-button-min-width: 40px;
    --epsp-button-padding: 4px 8px;
    --epsp-control-height: 20px;
    --epsp-gap: 0.5rem;
    --epsp-nav-icon-size: 20px;
    --epsp-period-buttons-row-height: 20px;
    display: flex;
    flex-direction: column;
    gap: var(--epsp-gap);
    width: 100%;
  }

  /* Compact: tighter spacing and smaller controls (unchanged from previous behavior). */
  .energy-period-selector.compact-mode {
    --epsp-button-font-size: 10px;
    --epsp-date-font-size: 12px;
    --epsp-button-min-width: 35px;
    --epsp-button-padding: 2px 6px;
    --epsp-control-height: 18px;
    --epsp-gap: 0.25rem;
    --epsp-nav-icon-size: 20px;
    --epsp-period-buttons-row-height: 20px;
  }

  /* Wide: more horizontal breathing room and slightly larger controls for wider dashboards. */
  .energy-period-selector.wide-mode {
    --epsp-button-font-size: 13px;
    --epsp-date-font-size: 18px;
    --epsp-button-min-width: 56px;
    --epsp-button-padding: 6px 12px;
    --epsp-control-height: 28px;
    --epsp-gap: 0.75rem;
    --epsp-nav-icon-size: 26px;
    --epsp-period-buttons-row-height: 28px;
  }

  /* Density: overrides preset tokens. Applied after layout_mode. */
  .energy-period-selector.density-compact {
    --epsp-button-font-size: 10px;
    --epsp-date-font-size: 12px;
    --epsp-button-min-width: 35px;
    --epsp-button-padding: 2px 6px;
    --epsp-control-height: 18px;
    --epsp-gap: 0.25rem;
    --epsp-nav-icon-size: 20px;
    --epsp-period-buttons-row-height: 20px;
  }
  .energy-period-selector.density-comfortable {
    --epsp-button-font-size: 14px;
    --epsp-date-font-size: 18px;
    --epsp-button-min-width: 60px;
    --epsp-button-padding: 6px 14px;
    --epsp-control-height: 30px;
    --epsp-gap: 1rem;
    --epsp-nav-icon-size: 28px;
    --epsp-period-buttons-row-height: 30px;
  }

  /* Button group width: full stretches the period selector row and inner group across available space. */
  .energy-period-selector.button-group-full .period-buttons-row {
    width: 100%;
  }
  .energy-period-selector.button-group-full .period-buttons-custom {
    flex: 1 1 auto;
    min-width: 0;
  }
  .energy-period-selector.button-group-full .period-button-custom {
    flex: 1 1 0%;
    min-width: var(--epsp-button-min-width);
  }

  .period-buttons-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--epsp-gap);
    flex-wrap: wrap;
    height: var(--epsp-period-buttons-row-height);
  }
  .date-controls-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--epsp-gap);
  }
  .date-display {
    font-size: var(--epsp-date-font-size);
    font-weight: 500;
  }
  
  .navigation-controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.25rem;
  }
  
  /* Arrow button alignment and sizing - most specific selectors */
  .energy-period-selector .navigation-controls ha-icon-button-prev,
  .energy-period-selector .navigation-controls ha-icon-button-next,
  .navigation-controls ha-icon-button-prev,
  .navigation-controls ha-icon-button-next {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    position: relative !important;
    top: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    line-height: var(--epsp-nav-icon-size) !important;
  }
  
  /* Target mwc-icon-button elements specifically */
  .navigation-controls ha-icon-button-prev mwc-icon-button,
  .navigation-controls ha-icon-button-next mwc-icon-button {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
  }
  
  /* Today icon button (all layout modes) - same sizing as nav chevrons so it scales with Button Font Size */
  .navigation-controls .today-icon {
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    line-height: var(--epsp-nav-icon-size) !important;
  }
  
  /* Custom HTML button group - full control */
  .period-buttons-custom {
    display: flex;
    gap: 0;
    align-items: center;
    background-color: transparent;
    border-radius: 8px;
    padding: 0;
    border: none;
    box-shadow: none;
  }
  
  .period-button-custom {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-text-color, #000000);
    padding: var(--epsp-button-padding);
    font-size: var(--epsp-button-font-size);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 0;
    font-family: inherit;
    min-width: var(--epsp-button-min-width);
    height: var(--epsp-control-height);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.0892857143em;
    outline: none;
    position: relative;
  }
  
  /* First button - rounded left */
  .period-button-custom:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  
  /* Last button - rounded right */
  .period-button-custom:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  
  /* Remove right border from all except last */
  .period-button-custom:not(:last-child) {
    border-right: none;
  }
  
  /* Hover state */
  .period-button-custom:hover {
    background-color: var(--divider-color, #e0e0e0);
    color: var(--primary-text-color, #000000);
  }
  
  /* Active/selected state */
  .period-button-custom.active {
    background-color: var(--primary-color, #03a9f4) !important;
    color: var(--text-primary-on-color, #ffffff) !important;
    border-color: var(--primary-color, #03a9f4) !important;
  }
  
  /* Focus state */
  .period-button-custom:focus {
    outline: none;
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .period-button-custom {
      background: var(--card-background-color, #1e1e1e);
      border-color: #202124;
    }
    
    .period-button-custom:hover {
      background-color: var(--divider-color, #404040);
    }
  }


  
  /* Custom Today button - matches period buttons */
  .today-button-custom {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-text-color) !important;
    padding: var(--epsp-button-padding);
    font-size: var(--epsp-button-font-size);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: var(--epsp-button-min-width);
    height: var(--epsp-control-height);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.0892857143em;
    outline: none;
  }
  
  .today-button-custom:hover {
    background-color: var(--divider-color, #e0e0e0);
    border-color: var(--divider-color, #e0e0e0);
  }
  
  .today-button-custom:focus {
    outline: none;
  }
  
  /* Dark mode support for Today button */
  @media (prefers-color-scheme: dark) {
    .today-button-custom {
      background: var(--card-background-color, #1e1e1e);
      border-color: #202124;
    }
  }
  
  /* Today button fallback styling - more native */
  .today-button-fallback {
    background: var(--secondary-background-color, #f0f0f0);
    border: 1px solid #202124;
    color: var(--primary-text-color) !important;
    padding: var(--epsp-button-padding);
    font-size: var(--epsp-button-font-size);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: var(--epsp-button-min-width);
    height: var(--epsp-control-height);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.0892857143em;
  }
  
  .today-button-fallback:hover {
    background-color: var(--divider-color, #404040);
    border-color: var(--divider-color, #404040);
  }
  
  /* Dark mode support for Today button */
  @media (prefers-color-scheme: dark) {
    .today-button-fallback {
      background: var(--secondary-background-color, #505050);
      border-color: var(--divider-color, #404040);
    }
  }
  
  .today-button-fallback:focus {
    outline: none;
  }
  
  .today-button-fallback:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  
  /* Style ha-button to match the design */
  ha-button {
    --mdc-theme-primary: var(--primary-color);
    --mdc-theme-on-primary: var(--primary-text-color);
    --mdc-button-outline-color: var(--divider-color, #404040);
    --mdc-button-disabled-outline-color: var(--disabled-text-color);
    --mdc-button-disabled-ink-color: var(--disabled-text-color);
  }
  
  /* Ensure ha-button has proper styling */
  ha-button[outlined] {
    border: 1px solid var(--divider-color, #404040);
    background: transparent;
    color: var(--primary-text-color);
  }
  
  ha-button[outlined]:hover {
    background-color: var(--divider-color, #404040);
  }
  
  /* Style today button to match period buttons size - more native */
  .navigation-controls ha-button {
    --mdc-button-height: var(--epsp-control-height) !important;
    --mdc-button-min-width: var(--epsp-button-min-width) !important;
    --mdc-typography-button-font-size: var(--epsp-button-font-size) !important;
    --mdc-typography-button-font-weight: 500 !important;
    --mdc-typography-button-text-transform: uppercase !important;
    --mdc-typography-button-letter-spacing: 0.0892857143em !important;
    --mdc-shape-small: 4px !important;
    --mdc-button-outline-color: #202124 !important;
    background: var(--secondary-background-color, #f0f0f0) !important;
    border: 1px solid #202124 !important;
    border-radius: 4px !important;
    height: var(--epsp-control-height) !important;
    min-width: var(--epsp-button-min-width) !important;
    font-size: var(--epsp-button-font-size) !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
  }
  
  /* Force override for ha-button internal elements */
  .navigation-controls ha-button mwc-button {
    --mdc-button-height: var(--epsp-control-height) !important;
    --mdc-button-min-width: var(--epsp-button-min-width) !important;
    --mdc-typography-button-font-size: var(--epsp-button-font-size) !important;
    --mdc-typography-button-font-weight: 500 !important;
    --mdc-typography-button-text-transform: uppercase !important;
    --mdc-button-outline-color: #202124 !important;
    height: var(--epsp-control-height) !important;
    min-width: var(--epsp-button-min-width) !important;
    font-size: var(--epsp-button-font-size) !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
  }
  
  /* Text compare button - positioned above button group */
  .compare-button-custom {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-text-color) !important;
    padding: var(--epsp-button-padding);
    font-size: var(--epsp-button-font-size);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: var(--epsp-button-min-width);
    height: var(--epsp-control-height);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 0.0892857143em;
    outline: none;
    vertical-align: middle;
    margin-bottom: 0.5rem;
    align-self: flex-end;
  }
  
  .compare-button-custom:hover {
    background-color: var(--divider-color, #e0e0e0);
    border-color: var(--divider-color, #e0e0e0);
  }
  
  .compare-button-custom:focus {
    outline: none;
  }
  
  /* Compare button active state */
  .compare-button-custom.active {
    background: var(--primary-color, #03a9f4) !important;
    color: var(--text-primary-on-color, #ffffff) !important;
    border-color: var(--primary-color, #03a9f4) !important;
  }
  
  /* Dark mode support for Compare button */
  @media (prefers-color-scheme: dark) {
    .compare-button-custom {
      background: var(--card-background-color, #1e1e1e);
      border-color: #202124;
    }
  }
  
  /* Responsive design for mobile devices */
  @media (max-width: 768px) {
    .period-buttons-row {
      justify-content: flex-end;
    }
    .period-buttons-custom {
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 100%;
    }
    .date-controls-row {
      flex-direction: row;
      justify-content: flex-end;
    }
    .date-display {
      text-align: right;
      flex: 1;
    }
  }
  
  @media (max-width: 480px) {
    .period-buttons-custom {
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 100%;
    }
  }
  
  mwc-button {
    margin-left: 8px;
  }
  /* Removed conflicting ha-icon-button rule */
  ha-icon-button.active::before,
  mwc-button.active::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--primary-color);
    opacity: var(--mdc-icon-button-ripple-opacity, 0.12);
    pointer-events: none;
    content: '';
    transition: opacity 15ms linear, background-color 15ms linear;
  }
  ha-icon-button.active::before {
    border-radius: 50%;
  }
  .compare {
    position: relative;
    height: var(--epsp-nav-icon-size) !important;
    width: var(--epsp-nav-icon-size) !important;
    min-height: var(--epsp-nav-icon-size) !important;
    min-width: var(--epsp-nav-icon-size) !important;
    max-height: var(--epsp-nav-icon-size) !important;
    max-width: var(--epsp-nav-icon-size) !important;
    --mdc-icon-button-size: var(--epsp-nav-icon-size) !important;
    --mdc-icon-size: var(--epsp-nav-icon-size) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    line-height: var(--epsp-nav-icon-size) !important;
  }
  :host {
    --mdc-button-outline-color: currentColor;
    --mdc-theme-primary: currentColor;
    --mdc-theme-on-primary: currentColor;
    --mdc-button-disabled-outline-color: var(--disabled-text-color);
    --mdc-button-disabled-ink-color: var(--disabled-text-color);
    --mdc-icon-button-ripple-opacity: 0.2;
  }
  /* Remove this rule as it conflicts with our arrow button sizing */
  ha-button-toggle-group {
    direction: var(--direction);
    /* Let native component handle all styling */
  }
  mwc-button {
    flex-shrink: 0;
  }
`;
