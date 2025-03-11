<div align="center">
  
![workbench with tools, html, css, javascript, and download icon](https://raw.githubusercontent.com/wc-toolkit/lazy-loader/refs/heads/main/assets/wc-toolkit_lazy-loader.png)

</div>

# WC Toolkit Lazy Loader

Create a single entry point to lazy-load your custom elements/web components as needed!

As components get loaded the component configurations get removed from the list and when all of the components have been loaded, the loader will shut off to help improve performance.

```html
<body>
  <my-button>Button</my-button>
  <my-checkbox></my-checkbox>

  <!-- the lazy-loader will only load what gets used -->
  <script type="module" src="path/to/my/loader.js" />
</body>
```

## Usage

This package includes two ways to generate the custom data config file:

1. calling a function in your build pipeline
2. as a plugin for the [Custom Element Manifest Analyzer](https://custom-elements-manifest.open-wc.org/)

### Install

```bash
npm i -D @wc-toolkit/lazy-loader
```

### Build Pipeline

```js
import { generateLazyLoader, type LazyLoaderOptions } from "@wc-toolkit/lazy-loader";
import manifest from "./path/to/custom-elements.json" with { type: 'json' };

const options: LazyLoaderOptions = {...};

generateLazyLoader(manifest, options);
```

### CEM Analyzer

#### Set-up

Ensure the following steps have been taken in your component library prior to using this plugin:

- Install and set up the [Custom Elements Manifest Analyzer](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/)
- Create a [config file](https://custom-elements-manifest.open-wc.org/analyzer/config/#config-file)

#### Import

```js
// custom-elements-manifest.config.js

import { lazyLoaderPlugin } from "@wc-toolkit/lazy-loader";

const options = {...};

export default {
  plugins: [
    lazyLoaderPlugin(options)
  ],
};
```

Once you run the analyzer, you should see a new file (`loader.js` by default) that users can import to load your components!

```js
<script type="module" src="https://my-cdn.com/loader.js"></script>;

// or

import "my-project/loader.js";
```

<div style="text-align: center; margin-top: 32px;">
  <a href="https://stackblitz.com/edit/vitejs-vite-rtmxxnnn?file=README.md" target="_blank">
    <img
      alt="Open in StackBlitz"
      src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
    />
  </a>
</div>

Be sure to check out the [official docs](https://wc-toolkit.com/adoption/lazy-loader) for more information on how to use this.