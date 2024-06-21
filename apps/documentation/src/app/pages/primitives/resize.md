---
title: 'Resize'
---

# Resize

Perform actions on element resize.

<docs-example name="resize"></docs-example>

## Usage

Assemble the resize directives in your template.

```html
<div (ngpResize)="onResize($event)"></div>
```

## API Reference

The following directives are available to import from the `@ng-primitives/ng-primitives/resize` package:

### NgpResize

Apply the `ngpResize` directive to an element to listen for resize events.

- Selector: `[ngpResize]`
- Exported As: `ngpResize`

<response-field name="ngpResize" type="boolean">
  Event emitted when the element is resize.
</response-field>