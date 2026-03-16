# Energy Period Selector Plus

[![ko-fi support](https://img.shields.io/badge/support-me-ff5e5b?style=flat-square&logo=ko-fi)](https://ko-fi.com/talkitron)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/talKitron/energy-period-selector-plus?style=flat-square)
![GitHub all releases](https://img.shields.io/github/downloads/talKitron/energy-period-selector-plus/total?style=flat-square)
![commit_activity](https://img.shields.io/github/commit-activity/y/talKitron/energy-period-selector-plus?color=brightgreen&label=Commits&style=flat-square)

![Hero Image](https://github.com/user-attachments/assets/212bcaa3-fe10-4b2c-a7ad-fb07a3bba5f2)
<img width="1042" height="237" alt="image" src="https://github.com/user-attachments/assets/2c170644-aa55-41c2-8efc-5a54292ec8ce" />



## 🎯 Goal

The main goal of this card is to expand the functionality and customizability of the official [Energy Date Picker Card](https://www.home-assistant.io/dashboards/energy/#energy-date-picker) from Home Assistant.

The goal is to deliver a card that fits in the overall design of the Energy Dashboard, while providing more features.

## 🙏 Attribution & Credits

This project is a continuation and enhancement of the original work by [@flixlix](https://github.com/flixlix). The original developer created an amazing foundation for this card, but after nearly 2 years of inactivity, we decided to continue development to fix critical issues and add new features.

**We want to give massive credit and thanks to @flixlix for their incredible work and inspiration!** 🙌

The original repository provided the solid foundation that made this enhanced version possible. Without their excellent initial implementation, this project wouldn't exist.

## 🚀 What's New & Fixed

### New Features
- **Layout Modes** - Choose between `standard`, `compact`, and `wide` layouts
- **Header Integration** - Optimized `compact` mode perfect for header usage
- **Enhanced UI Editor** - Added layout mode selection to the configuration interface
- **Improved Responsiveness** - Better behaviour on different screen sizes
- **Better Theme Integration** - Proper color theming throughout

### Code Quality Improvements
- **Cleaner CSS** - Removed redundant and conflicting styles
- **Better TypeScript** - Improved type safety and code organization
- **Simplified Configuration** - Removed unused options and simplified the API
- **Enhanced Documentation** - Comprehensive examples and usage guides

## ✨ Features

- **UI Editor** - Easy configuration through Home Assistant's interface
- **Flexible Layout Modes** - Standard card layout or compact header integration
- **Customizable Buttons** - Show/hide and style Compare, Today, and Period buttons
- **Entity Synchronization** - Sync dates with Home Assistant entities
- **Theme Integration** - Properly respects Home Assistant's theming system
- **Responsive Design** - Works great on all screen sizes

## Installation

### Installing via HACS (recommended)

[![Open your Home Assistant instance and open this repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=talKitron&repository=energy-period-selector-plus&category=plugin)

or

1. Go to HACS->Integrations
2. Add this repo(https://github.com/talKitron/energy-period-selector-plus) into your HACS custom repositories
3. Search for Energy Period Selector Plus Map and Download it
4. Restart your HomeAssistant

<details>  <summary>Manual Install</summary>

1. Download and copy `energy-period-selector-plus.js` from the [latest release](https://github.com/talKitron/energy-period-selector-plus/releases/latest) into your `config/www` directory.

2. Add the resource reference as described below.

### Add resource reference

If you configure Dashboards via YAML, add a reference to `energy-period-selector-plus.js` inside your `configuration.yaml`:

```yaml
resources:
  - url: /local/energy-period-selector-plus.js
    type: module
```

Else, if you prefer the graphical editor, use the menu to add the resource:

1. Make sure advanced mode is enabled in your user profile (click on your user name to get there)
2. Navigate to Settings -> Dashboards
3. Click three dot icon
4. Select Resources
5. Hit (+ ADD RESOURCE) icon
6. Enter URL `/local/energy-period-selector-plus.js` and select type "JavaScript Module".
   (Use `/hacsfiles/energy-period-selector-plus/energy-period-selector-plus.js` and select "JavaScript Module" for HACS install if HACS didn't do it already) 
</details>

## Using the card

To configure this card, only the type is required, making it very easy to get started.


In addition to that, I developed a UI Editor, making it even easier to change the card according to your preferences. 🥳

The UI Editor looks like this:

<img width="1238" height="1132" alt="image" src="https://github.com/user-attachments/assets/b5365362-93a4-4a55-bd67-a418d93b39cd" />




### Options

#### Card options

| Name | Type | Default | Description |
|------|------|:--------:|------------|
| type           | `string`  | **required** | Always `custom:energy-period-selector-plus`. |
| layout_mode    | `string`  | `standard`   | Layout preset: `standard`, `compact`, or `wide`. |
| card_background| `boolean` | false        | Show a card background behind the controls. |
| title          | `string`  | undefined    | Optional title shown above the controls. |
| today_button_type | `string` | `text`    | Today button style: `none`, `icon`, or `text`. |
| prev_next_buttons | `boolean` | true     | Show previous/next period arrow buttons. |
| compare_button_type | `string` | `none`  | Compare button style: `none`, `icon`, or `text`. |
| period_buttons | `array`   | undefined    | Limit which period buttons show (e.g. `[day, week, month]`). |
| custom_period_label | `string` | undefined | Custom label for the `custom` period button. |
| sync_entity   | `string`  | undefined    | Single date sync target (e.g. `input_datetime.solar_chart_date`). |
| sync_direction| `string`  | `both`       | Direction for `sync_entity`: `to-entity`, `from-entity`, or `both`. |
| sync_start_entity | `string` | undefined | Start date entity for range sync. |
| sync_end_entity   | `string` | undefined | End date entity for range sync. |

**Sync options:** Use either **single-date sync** (`sync_entity` + `sync_direction`) or **range sync** (`sync_start_entity` / `sync_end_entity`). Do not configure both at the same time.

**Advanced appearance (optional):** You can fine-tune sizing with numeric overrides. These take precedence over layout and density presets. All are optional; leave empty to use preset values.

| Name | Type | Description |
|------|------|-------------|
| button_font_size   | `number` | Button font size in pixels (e.g. `13`). |
| date_font_size     | `number` | Date display font size in pixels (e.g. `18`). |
| button_min_width   | `number` | Minimum button width in pixels (e.g. `56`). |
| gap                | `number` | Gap between elements in pixels (e.g. `10`). |


### Example Configurations

<img width="1322" alt="Basic Configuration" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/7834de56-6096-45d0-9373-781c6f56f77b">

```yaml
type: custom:energy-period-selector-plus
card_background: true
```
<hr/>
<img width="1322" alt="No previous or next controls" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/38238f3f-f0d7-46f6-a33b-984e16707210">

```yaml
type: custom:energy-period-selector-plus
card_background: true
title: No Previous or Next Controls
prev_next_buttons: false
```
<hr/>
<img width="1231" alt="No today button" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/1a26100d-5ccf-4713-9646-f52b392039cd">

```yaml
type: custom:energy-period-selector-plus
card_background: true
title: No Today Button
today_button_type: false
```
<hr/>
<img width="1219" alt="Text compare button" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/8dc6d530-9771-47c8-b291-fd41229e4916">

```yaml
type: custom:energy-period-selector-plus
card_background: true
title: Text Compare Button
compare_button_type: text
```
<hr/>
<img width="1301" alt="Icon compare button" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/780e7460-4380-4288-8376-033629725501">

```yaml
type: custom:energy-period-selector-plus
card_background: true
title: Icon Compare Button
compare_button_type: icon
```
<hr/>
<img width="1071" alt="No week button" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/49cafcfa-daa0-4ae1-973a-71a88402bbd8">

```yaml
type: custom:energy-period-selector-plus
card_background: true
title: No Week Button
period_buttons:
  - day
  - month
  - year
```

<hr/>
<img width="1071" alt="Custom period picker" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/164c3318-e0e6-4cf6-a7e1-9efed26d5ecb">

```yaml
type: custom:energy-period-selector-plus
card_background: true
title: Custom Period Picker
period_buttons:
  - day
  - week
  - month
  - year
  - custom
```

<hr/>
<img width="1071" alt="Custom period label" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/ee007bd1-ee01-4356-be33-98318fe371e1">

```yaml
type: custom:energy-period-selector-plus
card_background: true
title: Custom Period Picker
period_buttons:
  - day
  - week
  - month
  - year
  - custom
custom_period_label: </|\>
```

<hr/>
<img width="514" height="99" alt="image" src="https://github.com/user-attachments/assets/fe53ef8c-c4a6-4d1a-9536-c012e0d85746" />


```yaml
type: custom:energy-period-selector-plus
layout_mode: compact
card_background: false
title: Compact Layout for Headers
period_buttons: [day, week, month, year]
compare_button_type: text
```

<hr/>
<img width="445" height="57" alt="image" src="https://github.com/user-attachments/assets/cce68151-04ad-48ad-9e06-671666921159" />

```yaml
# Perfect for header_cards configuration
type: custom:energy-period-selector-plus
layout_mode: compact
card_background: false
period_buttons: [day, week, month, year]
compare_button_type: icon
sync_entity: input_datetime.solar_chart_date
```

<hr/>

**Wide layout (wider dashboards):**

```yaml
type: custom:energy-period-selector-plus
layout_mode: wide
card_background: true
period_buttons: [day, week, month, year]
```

<hr/>

**Advanced appearance overrides (optional):**

```yaml
type: custom:energy-period-selector-plus
layout_mode: wide
button_font_size: 13
date_font_size: 18
button_min_width: 56
gap: 10
```

<hr/>

## 🏠 Header Integration

The `compact` layout mode is specifically designed for header integration in Home Assistant. Here's how to use it:

### Basic Header Setup

```yaml
header_cards:
  justify_content: null
  cards:
    - type: vertical-stack
      cards:
        - type: custom:energy-period-selector-plus
          layout_mode: compact
          card_background: false
          period_buttons: [day, week, month, year]
          compare_button_type: text
          sync_entity: input_datetime.solar_chart_date
```

### Advanced Header Configuration

```yaml
header_cards:
  justify_content: null
  cards:
    - type: vertical-stack
      cards:
        - type: custom:energy-period-selector-plus
          layout_mode: compact
          card_background: false
          period_buttons: [day, week, month, year, custom]
          compare_button_type: icon
          today_button_type: text
          sync_entity: input_datetime.solar_chart_date
          sync_direction: both
```

## 🔄 Migration from Original

If you're upgrading from the original version, here's what you need to know:

### What's Fixed
- **Period buttons now work correctly** - This was the main issue in the original
- **Arrow buttons stay aligned** - No more misalignment after a few seconds
- **Better theme integration** - Colors now properly respect your HA theme
- **Improved stability** - No more dynamic styling conflicts

#### Real world Demo

<img width="1071" alt="Custom period label" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/b01a6be8-4d68-4e6e-8593-985bdf253afb">
