# MumpUI

remove bold font
fix colors
default theme
optimize scss with variables like padding & border
z-index standard
fix translucent color
make animations unique
color field padding
selection color

tooltip timer
remove dropdown.search
fix dashboard with z-index & form
fuse & axios dynamic
pending components
index to key-label migration
config
  - tooltip delay
  - message settings

review all components
  - disabled field
  - data objects
  - fix type of interface according to comp
  - remove unused imports
  - set required fields
  - add simplified docs, no ts, no arrow functions
  - related components & blogs

set search from query
version
changelog
version snapshots

## Discord

- general
- issues
- suggestions

## Importing stylesheet

```jsx
import 'mumpui/lib/styles/index.scss'
```

# Landing Page

## Setup

## Stories

## Input

- Input
- Textarea

- Field
- Form

- Checkbox
- Radio

- Dropdown
- Multi-Select

- Search
- Button

- Date / Time
- Color

- Range
- File

## Display

- List
- Table
- Loader
- Placeholder
- Divider
- Chain
- Tooltip

## Feedback

- Message
- Confirm
- Modal
- Note

## Navigation

- Tabs
- Menu
- Pagination
- Breadcrumbs

## Styling

- Theme
- Responsive
- Utils

## Helpers

- Request
- Storage
- Utils
- URL Handler
- Scroll Handler
- Depth Handler
- Wrapper

## Advanced

- Dashboard
- Typography
- Code
- MD

npx sass src/lib/styles/components.scss mumpui.css --style=compressed --no-source-map --fatal-deprecation=0.0.0
