# Changelog

## [0.2.9] - 2026-03-16

- Add new `layout_mode: wide` preset for wider cards.
- Add optional customizable options (`button_font_size`, `date_font_size`, `button_min_width`, `gap`).
- Improve editor behavior for Today/Compare button types and advanced appearance inputs.

## [0.2.8] - 2026-03-14

- Add range entity sync support (`sync_start_entity` / `sync_end_entity`).
- Improve installation instructions.
- Automatically detect prerelease tags in the release workflow.

## [0.2.7] - 2026-03-10

- Fix GitHub release flow to support immutable releases.

## [0.2.6] - 2026-03-08

### Fixed
- Support HA 2026.3 flat grid energy source data structure

## [0.2.5] - 2024-12-19

### Changed
- Moved compare button to same row as period buttons for better layout
- Made today and compare icons smaller in compact mode (matching arrow button size)
- Improved compare button positioning: text version now appears above button group, icon version stays inline
- Updated sync direction labels from "Both Ways" to "Bi-directional" for better technical accuracy

### Fixed
- Fixed vertical alignment issues between compare button and period button group
- Resolved line-height issues causing misalignment in compact mode

## [0.2.4] - Previous release

### Fixed
- Fixes the date period button group not showing

### Changed
- Updates dependencies and TypeScript quality

### Added
- Adds header integration and layout modes for Energy Period Selector Plus
- Introduces compact and standard layout modes for better customization
- Adds sync_entity, sync_direction, and improves documentation