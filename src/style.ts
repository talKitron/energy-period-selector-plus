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
  
  /* Compact layout mode */
  .energy-period-selector.compact-mode {
    gap: 0.25rem;
    padding: 0;
  }
  
  .energy-period-selector.compact-mode .period-buttons-row {
    margin-bottom: 0;
    height: 20px;
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

  /* Compact button sizing */
  .energy-period-selector.compact-mode .period-button-custom {
    height: 18px;
    min-width: 35px;
    padding: 2px 6px;
    font-size: 10px;
    vertical-align: middle;
  }
  
  .energy-period-selector.compact-mode .today-button-custom {
    height: 18px;
    min-width: 35px;
    padding: 2px 6px;
    font-size: 10px;
    vertical-align: middle;
  }
  
  .energy-period-selector.compact-mode .compare-button-custom {
    height: 18px;
    min-width: 35px;
    padding: 2px 6px;
    font-size: 10px;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.25rem;
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
  
  /* Date display base styling */
  .date-display {
    color: var(--primary-text-color, #000000) !important;
  }

  /* Compact date display */
  .energy-period-selector.compact-mode .date-display {
    font-size: 12px;
    font-weight: 400;
  }
  
  .mdc-text-field__icon .mdc-text-field__icon--trailing {
    padding-left: 0;
  }
  .energy-period-selector {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  .period-buttons-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    height: 20px;
  }
  .date-controls-row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .date-display {
    font-size: 16px;
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
    position: relative !important;
    top: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    line-height: 20px !important;
  }
  
  /* Target mwc-icon-button elements specifically */
  .navigation-controls ha-icon-button-prev mwc-icon-button,
  .navigation-controls ha-icon-button-next mwc-icon-button {
    --mdc-icon-button-size: 20px !important;
    height: 20px !important;
    width: 20px !important;
    min-height: 20px !important;
    min-width: 20px !important;
    max-height: 20px !important;
    max-width: 20px !important;
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
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 0;
    font-family: inherit;
    min-width: 40px;
    height: 20px;
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
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: 40px;
    height: 20px;
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
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: 40px;
    height: 20px;
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
    --mdc-button-height: 20px !important;
    --mdc-button-min-width: 40px !important;
    --mdc-typography-button-font-size: 11px !important;
    --mdc-typography-button-font-weight: 500 !important;
    --mdc-typography-button-text-transform: uppercase !important;
    --mdc-typography-button-letter-spacing: 0.0892857143em !important;
    --mdc-shape-small: 4px !important;
    --mdc-button-outline-color: #202124 !important;
    background: var(--secondary-background-color, #f0f0f0) !important;
    border: 1px solid #202124 !important;
    border-radius: 4px !important;
    height: 20px !important;
    min-width: 40px !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
  }
  
  /* Force override for ha-button internal elements */
  .navigation-controls ha-button mwc-button {
    --mdc-button-height: 20px !important;
    --mdc-button-min-width: 40px !important;
    --mdc-typography-button-font-size: 11px !important;
    --mdc-typography-button-font-weight: 500 !important;
    --mdc-typography-button-text-transform: uppercase !important;
    --mdc-button-outline-color: #202124 !important;
    height: 20px !important;
    min-width: 40px !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
  }
  
  /* Text compare button - positioned above button group */
  .compare-button-custom {
    background: var(--card-background-color, #ffffff);
    border: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-text-color) !important;
    padding: 4px 8px;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    font-family: inherit;
    min-width: 40px;
    height: 20px;
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
    .energy-period-selector {
      gap: 0.5rem;
    }
    .period-buttons-row {
      justify-content: flex-end;
      gap: 0.25rem;
    }
    .period-buttons-custom {
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 100%;
    }
    .period-button-custom {
      flex: 0 0 auto;
      min-width: 50px;
      padding: 3px 8px;
      font-size: 11px;
      height: 20px;
    }
    .period-button-custom.active {
      background-color: var(--primary-color, #03a9f4) !important;
      color: var(--text-primary-on-color, #ffffff) !important;
      border-color: var(--primary-color, #03a9f4) !important;
    }
    .date-controls-row {
      flex-direction: row;
      justify-content: flex-end;
      gap: 0.5rem;
    }
    .date-display {
      font-size: 14px;
      text-align: right;
      flex: 1;
    }
    .today-button-custom,
    .today-button-fallback {
      min-width: 40px;
      height: 20px;
      padding: 3px 8px;
      font-size: 11px;
    }
    .compare-button-custom {
      min-width: 40px;
      height: 20px;
      padding: 3px 8px;
      font-size: 11px;
    }
    .navigation-controls ha-button {
      --mdc-button-height: 20px;
      --mdc-button-min-width: 40px;
      font-size: 11px;
      padding: 3px 8px;
    }
    
  }
  
  @media (max-width: 480px) {
    .period-button-custom {
      min-width: 40px;
      padding: 2px 6px;
      font-size: 10px;
      height: 18px;
    }
    .date-display {
      font-size: 12px;
    }
    .today-button-custom,
    .today-button-fallback {
      min-width: 35px;
      height: 18px;
      padding: 2px 6px;
      font-size: 10px;
    }
    .compare-button-custom {
      min-width: 35px;
      height: 18px;
      padding: 2px 6px;
      font-size: 10px;
    }
    .navigation-controls ha-button {
      --mdc-button-height: 18px;
      --mdc-button-min-width: 35px;
      font-size: 10px;
      padding: 2px 6px;
    }
    
    /* Ultra-compact mode for very narrow spaces */
    .energy-period-selector.compact-mode .period-button-custom {
      min-width: 30px;
      padding: 1px 4px;
      font-size: 9px;
      height: 16px;
    }
    
    .energy-period-selector.compact-mode .today-button-custom {
      min-width: 30px;
      height: 16px;
      padding: 1px 4px;
      font-size: 9px;
    }
    
    .energy-period-selector.compact-mode .compare-button-custom {
      min-width: 30px;
      height: 16px;
      padding: 1px 4px;
      font-size: 9px;
    }
    
    .energy-period-selector.compact-mode .navigation-controls ha-icon-button,
    .energy-period-selector.compact-mode .navigation-controls ha-icon-button-prev,
    .energy-period-selector.compact-mode .navigation-controls ha-icon-button-next {
      --mdc-icon-button-size: 20px !important;
      height: 20px !important;
      width: 20px !important;
      min-height: 20px !important;
      min-width: 20px !important;
      max-height: 20px !important;
      max-width: 20px !important;
    }
    
    .energy-period-selector.compact-mode .date-display {
      font-size: 10px;
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
    height: 20px !important;
    width: 20px !important;
    min-height: 20px !important;
    min-width: 20px !important;
    max-height: 20px !important;
    max-width: 20px !important;
    --mdc-icon-button-size: 20px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    vertical-align: middle !important;
    line-height: 20px !important;
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
