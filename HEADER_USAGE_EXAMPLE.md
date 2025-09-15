# Energy Period Selector Plus - Header Usage Guide

## Overview

The Energy Period Selector Plus card now supports optimized layouts for header usage with several new configuration options.

## New Configuration Options

### Layout Modes
- `layout_mode`: `'standard'` | `'compact'`
  - `'standard'`: Default mode for normal card usage
  - `'compact'`: Compact mode optimized for header integration and limited space

## Header Configuration Examples

### Basic Header Usage
```yaml
header_cards:
  justify_content: null
  cards:
    - type: vertical-stack
      cards:
        - type: custom:energy-period-selector-plus
          layout_mode: compact
          card_background: false
          today_button: true
          prev_next_buttons: true
          today_button_type: text
          period_buttons:
            - day
            - week
            - month
            - year
            - custom
          sync_entity: input_datetime.solar_chart_date
          sync_direction: both
          style: |
            ha-card {
              height: 50px !important;
              background: none;
              border: none;
            }
```

### Compact Header for Narrow Spaces
```yaml
header_cards:
  justify_content: null
  cards:
    - type: vertical-stack
      cards:
        - type: custom:energy-period-selector-plus
          layout_mode: compact
          card_background: false
          today_button: true
          prev_next_buttons: true
          today_button_type: text
          period_buttons:
            - day
            - week
            - month
            - year
          sync_entity: input_datetime.solar_chart_date
          sync_direction: both
          style: |
            ha-card {
              height: 40px !important;
              background: none;
              border: none;
            }
```

### Recommended Header Usage (Default Layout)
```yaml
header_cards:
  justify_content: null
  cards:
    - type: vertical-stack
      cards:
        - type: custom:energy-period-selector-plus
          layout_mode: compact
          card_background: false
          today_button: true
          prev_next_buttons: true
          today_button_type: text
          period_buttons:
            - day
            - week
            - month
            - year
            - custom
          sync_entity: input_datetime.solar_chart_date
          sync_direction: both
          style: |
            ha-card {
              height: 50px !important;
              background: none;
              border: none;
            }
```

### Header with Compare Button
```yaml
header_cards:
  justify_content: null
  cards:
    - type: vertical-stack
      cards:
        - type: custom:energy-period-selector-plus
          layout_mode: compact
          compare_button_type: text
          card_background: false
          today_button: true
          prev_next_buttons: true
          today_button_type: text
          period_buttons:
            - day
            - week
            - month
            - year
            - custom
          sync_entity: input_datetime.solar_chart_date
          sync_direction: both
          style: |
            ha-card {
              height: 60px !important;
              background: none;
              border: none;
            }
```

## Key Improvements for Header Usage

### 1. **Reduced Height**
- Compact button sizing (18px height in header mode)
- Minimal spacing between elements
- No card padding in header mode

### 2. **Horizontal Layout**
- Period buttons and date controls in a single row
- Better space utilization
- Responsive wrapping on narrow screens

### 3. **Smart Compare Button**
- Automatically hidden in header mode by default
- Can be enabled with `hide_compare_in_header: false`
- Compact sizing when shown

### 4. **Responsive Design**
- Adapts to very narrow header spaces
- Ultra-compact mode for screens < 480px
- Flexible wrapping for different screen sizes

### 5. **No Card Wrapper**
- Removes `ha-card` wrapper in header mode
- Direct integration with header styling
- Better control over appearance

## Styling Tips

### Height Optimization
```css
ha-card {
  height: 35px !important;  /* Adjust based on your header height */
  background: none;
  border: none;
}
```

### Color Matching
```css
ha-card {
  background: var(--header-background-color, transparent);
  color: var(--header-text-color, var(--primary-text-color));
}
```

### Spacing Control
```css
energy-period-selector-plus {
  --header-gap: 0.25rem;  /* Custom gap between elements */
}
```

## Migration from Current Setup

To optimize your current header configuration:

1. Add `layout_mode: compact` to enable compact optimizations
2. Remove the `ha-card` styling since it's not used in compact mode
3. To hide compare button, set `compare_button_type: false` (or omit it entirely)
4. To show compare button, set `compare_button_type: 'text'` or `compare_button_type: 'icon'`

Your current configuration will work, but these additions will make it more efficient and better integrated with the header.
