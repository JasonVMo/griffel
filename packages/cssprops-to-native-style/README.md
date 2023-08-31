# Convert CSSProperties to ReactNative Style Objects

A utility package which will convert CSSProperties objects (effectively CSS in the format suitable
for use in inline styles) into react-native styles. Note that this doesn't handle CSS in standard
kebab-case form.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [`createShadowDOMRenderer()`](#createshadowdomrenderer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```bash
npm install @griffel/shadow-dom
# or
yarn add @griffel/shadow-dom
```

## `createShadowDOMRenderer()`

```ts
import { createShadowDOMRenderer } from '@griffel/shadow-dom';

const render = createShadowDOMRenderer(element.shadowRoot);
```
