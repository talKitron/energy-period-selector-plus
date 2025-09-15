# Energy Period Selector Plus

[![ko-fi support](https://img.shields.io/badge/support-me-ff5e5b?style=flat-square&logo=ko-fi)](https://ko-fi.com/flixlix)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/flixlix/energy-period-selector-plus?style=flat-square)
![GitHub all releases](https://img.shields.io/github/downloads/flixlix/energy-period-selector-plus/total?style=flat-square)
![commit_activity](https://img.shields.io/github/commit-activity/y/flixlix/energy-period-selector-plus?color=brightgreen&label=Commits&style=flat-square)

![Hero Image](https://github.com/flixlix/energy-period-selector-plus/assets/61006057/93068f68-b989-4ff1-95bf-52f6e394c85f)
<img width="1244" alt="New Hero Image" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/b5064161-b8dd-4fa5-865a-5815635d3cbb">


## 🎯 Goal

The main goal of this card is to expand the functionality and customizability of the official [Energy Date Picker Card](https://www.home-assistant.io/dashboards/energy/#energy-date-picker) from Home Assistant.

The goal is to deliver a card that fits in the overall design of the Energy Dashboard, while providing more features.

## 🙏 Attribution & Credits

This project is a continuation and enhancement of the original work by [@flixlix](https://github.com/flixlix). The original developer created an amazing foundation for this card, but after nearly 2 years of inactivity, we decided to continue development to fix critical issues and add new features.

**We want to give massive credit and thanks to @flixlix for their incredible work and inspiration!** 🙌

The original repository provided the solid foundation that made this enhanced version possible. Without their excellent initial implementation, this project wouldn't exist.

## 🚀 What's New & Fixed

### New Features
- **Layout Modes** - Choose between `standard` and `compact` layouts
- **Header Integration** - Optimized `compact` mode perfect for header usage
- **Enhanced UI Editor** - Added layout mode selection to the configuration interface
- **Improved Responsiveness** - Better behavior on different screen sizes
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

## Install

### HACS (recommended)

This card is direclty available in [HACS](https://hacs.xyz/) (Home Assistant Community Store).
_HACS is a third party community store and is not included in Home Assistant out of the box._
To install this:

- Go to HACS
- Click on `Frontend`
- Search for `Energy Period Selector Plus`
- Install via UI

<details>  <summary>Manual Install</summary>

1. Download and copy `energy-period-selector-plus.js` from the [latest release](https://github.com/flixlix/energy-period-selector-plus/releases/latest) into your `config/www` directory.

2. Add the resource reference as decribed below.

### Add resource reference

If you configure Dashboards via YAML, add a reference to `energy-period-selector-plus.js` inside your `configuration.yaml`:

```yaml
resources:
  - url: /local/energy-period-selector-plus.js
    type: module
```

Else, if you prefer the graphical editor, use the menu to add the resource:

1. Make sure, advanced mode is enabled in your user profile (click on your user name to get there)
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

<img width="1049" alt="Bildschirmfoto 2023-05-20 um 22 01 46" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/4f12ecd5-e1b5-4362-994c-228fa0fffdd5">



### Options

#### Card options

| Name                | Type      |   Default    | Description                                                                                                                                                                  |
|---------------------| --------- |:------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type                | `string`  | **required** | `custom:energy-period-selector-plus`. |
| layout_mode         | `string`  | `standard`   | Layout mode for the card. Supported values are `standard` (default card layout) and `compact` (optimized for headers). |
| card_background     | `boolean`  | false | If set to `true`, a card will be added to the background of the card. |
| title | `string` | undefined | If set, a title will be added to the card. |
| today_button_type        | `boolean`  | true | If set to `true`, a button will be added to select today. |
| prev_next_buttons   | `boolean`  | true | If set to `true`, buttons will be added to control the previous and next period. |
| compare_button_type      | `string`  | undefined | If set, a button will be added to toggle the compare mode. Supported values are `icon` and `text`. |
| period_buttons | `array` | undefined | If set, only buttons inside this array will be displayed. Supported values are `day`, `week`, `month`, `year` and `custom`. Order of your array will be applied. |
| custom_period_label | `string` | undefined | If set, the label of the custom period button will be changed to this value. Otherwise will be synced to your HA language (If not, consider submitting a PR, adding your language to the localize function.) |
| sync_entity | `string` | undefined | If set, the card will sync its selected date with the specified Home Assistant entity (e.g., `input_datetime.solar_chart_date`). |
| sync_direction | `string` | `both` | Controls the sync direction. Supported values are `to-entity`, `from-entity`, and `both`. |


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
<img width="1071" alt="Entity Sync Configuration" src="https://github.com/flixlix/energy-period-selector-plus/assets/61006057/entity-sync-example">

```yaml
type: custom:energy-period-selector-plus
card_background: true
title: Entity Sync Example
period_buttons: [day, week, month, year]
sync_entity: input_datetime.solar_chart_date
sync_direction: both
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
