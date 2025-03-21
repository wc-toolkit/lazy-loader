
let observer;
let components = {
  "sl-alert": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/alert/alert.js",
    "dependencies": [
      "sl-icon-button"
    ]
  },
  "sl-animation": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/animation/animation.js",
    "dependencies": []
  },
  "sl-animated-image": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/animated-image/animated-image.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-badge": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/badge/badge.js",
    "dependencies": []
  },
  "sl-breadcrumb-item": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/breadcrumb-item/breadcrumb-item.js",
    "dependencies": []
  },
  "sl-breadcrumb": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/breadcrumb/breadcrumb.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-avatar": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/avatar/avatar.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-button": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/button/button.js",
    "dependencies": [
      "sl-icon",
      "sl-spinner"
    ]
  },
  "sl-button-group": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/button-group/button-group.js",
    "dependencies": []
  },
  "sl-card": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/card/card.js",
    "dependencies": []
  },
  "sl-carousel": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/carousel/carousel.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-carousel-item": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/carousel-item/carousel-item.js",
    "dependencies": []
  },
  "sl-checkbox": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/checkbox/checkbox.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-color-picker": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/color-picker/color-picker.js",
    "dependencies": [
      "sl-button",
      "sl-button-group",
      "sl-dropdown",
      "sl-input",
      "sl-visually-hidden"
    ]
  },
  "sl-details": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/details/details.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-copy-button": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/copy-button/copy-button.js",
    "dependencies": [
      "sl-icon",
      "sl-tooltip"
    ]
  },
  "sl-dialog": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/dialog/dialog.js",
    "dependencies": [
      "sl-icon-button"
    ]
  },
  "sl-divider": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/divider/divider.js",
    "dependencies": []
  },
  "sl-drawer": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/drawer/drawer.js",
    "dependencies": [
      "sl-icon-button"
    ]
  },
  "sl-dropdown": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/dropdown/dropdown.js",
    "dependencies": [
      "sl-popup"
    ]
  },
  "sl-format-number": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/format-number/format-number.js",
    "dependencies": []
  },
  "sl-format-bytes": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/format-bytes/format-bytes.js",
    "dependencies": []
  },
  "sl-format-date": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/format-date/format-date.js",
    "dependencies": []
  },
  "sl-include": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/include/include.js",
    "dependencies": []
  },
  "sl-input": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/input/input.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-icon-button": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/icon-button/icon-button.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-icon": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/icon/icon.js",
    "dependencies": []
  },
  "sl-image-comparer": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/image-comparer/image-comparer.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-menu-item": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/menu-item/menu-item.js",
    "dependencies": [
      "sl-icon",
      "sl-popup",
      "sl-spinner"
    ]
  },
  "sl-menu-label": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/menu-label/menu-label.js",
    "dependencies": []
  },
  "sl-menu": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/menu/menu.js",
    "dependencies": []
  },
  "sl-mutation-observer": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/mutation-observer/mutation-observer.js",
    "dependencies": []
  },
  "sl-option": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/option/option.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-progress-ring": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/progress-ring/progress-ring.js",
    "dependencies": []
  },
  "sl-popup": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/popup/popup.js",
    "dependencies": []
  },
  "sl-progress-bar": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/progress-bar/progress-bar.js",
    "dependencies": []
  },
  "sl-radio": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/radio/radio.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-radio-group": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/radio-group/radio-group.js",
    "dependencies": [
      "sl-button-group"
    ]
  },
  "sl-qr-code": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/qr-code/qr-code.js",
    "dependencies": []
  },
  "sl-radio-button": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/radio-button/radio-button.js",
    "dependencies": []
  },
  "sl-range": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/range/range.js",
    "dependencies": []
  },
  "sl-rating": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/rating/rating.js",
    "dependencies": [
      "sl-icon"
    ]
  },
  "sl-relative-time": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/relative-time/relative-time.js",
    "dependencies": []
  },
  "sl-resize-observer": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/resize-observer/resize-observer.js",
    "dependencies": []
  },
  "sl-select": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/select/select.js",
    "dependencies": [
      "sl-icon",
      "sl-popup",
      "sl-tag"
    ]
  },
  "sl-skeleton": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/skeleton/skeleton.js",
    "dependencies": []
  },
  "sl-split-panel": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/split-panel/split-panel.js",
    "dependencies": []
  },
  "sl-spinner": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/spinner/spinner.js",
    "dependencies": []
  },
  "sl-switch": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/switch/switch.js",
    "dependencies": []
  },
  "sl-tab-panel": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/tab-panel/tab-panel.js",
    "dependencies": []
  },
  "sl-tab": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/tab/tab.js",
    "dependencies": [
      "sl-icon-button"
    ]
  },
  "sl-tab-group": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/tab-group/tab-group.js",
    "dependencies": [
      "sl-icon-button"
    ]
  },
  "sl-textarea": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/textarea/textarea.js",
    "dependencies": []
  },
  "sl-tag": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/tag/tag.js",
    "dependencies": [
      "sl-icon-button"
    ]
  },
  "sl-tooltip": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/tooltip/tooltip.js",
    "dependencies": [
      "sl-popup"
    ]
  },
  "sl-tree": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/tree/tree.js",
    "dependencies": []
  },
  "sl-tree-item": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/tree-item/tree-item.js",
    "dependencies": [
      "sl-checkbox",
      "sl-icon",
      "sl-spinner"
    ]
  },
  "sl-visually-hidden": {
    "importPath": "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/visually-hidden/visually-hidden.js",
    "dependencies": []
  }
};
const eagerLoad = [];

/** Update the lazy-loader configuration at runtime */
export async function updateConfig(config) {
  if (config.components) {
    components = { ...components, ...config.components };
  }

  if(config.prefix || config.suffix) {
    components = getScopedComponents(config.prefix, config.suffix);
  }

  if (config.rootElement) {
    if (observer) {
      observer.disconnect();
    }
    start(config.rootElement);
  }

  if (config.eagerLoad) {
    await Promise.allSettled(eagerLoad?.map((tagName) => register(tagName)));
  }
}

function getScopedComponents(prefix = "", suffix = "") {
  const scopedComponents = {};
  for (const [key, value] of Object.entries(components)) {
    const newKey = prefix + key + suffix;
    scopedComponents[newKey] = value;
  }

  return scopedComponents;
}

/** Load any undefined custom elements and load the components in the list */
async function load(root) {
  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
  const tags = [...root.querySelectorAll(":not(:defined)")]?.map((el) =>
    el.tagName.toLowerCase()
  ) || [];
  if (rootTagName.includes("-") && !customElements.get(rootTagName)) {
    tags.push(rootTagName);
  }
  const tagsToRegister = [...new Set(tags)];
  await Promise.allSettled(tagsToRegister?.map((tagName) => register(tagName)));
}

/** Register the component and any dependencies */
function register(tagName) {
  const component = components[tagName];

  if (customElements.get(tagName)) {
    
    cleanUp(component, tagName);
    return Promise.resolve();
  }

  if (!component) {
    
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    import(component.importPath)
      .then(() => {
        
        cleanUp(component, tagName);
        resolve();
      })
      .catch(() => {
        console.error(`Unable to load <${tagName}> from ${component.importPath}`);
        reject();
      });
  });
}

/** Remove the component from the list of components to load */
function cleanUp(component, tagName) {
  delete components[tagName];
  component.dependencies?.forEach((dependency) => {
    delete components[dependency];
  });

  if (!Object.keys(component).length) {
    observer.disconnect();
  }
}

/** Delay the display of the UI until all components have loaded */
function reduceFOUC() {
  Promise.allSettled(
    [...document.querySelectorAll(":not(:defined)")].map((component) =>
      customElements.whenDefined(component.tagName.toLowerCase())
    )
  ).then(() => document.body.classList.add("wc-loaded"));

  // Add fallback in case a component fails to load
  setTimeout(() => document.body.classList.add("wc-loaded"), 200);
}

/** Initialize the loader */
async function start(root = document.body) {
  reduceFOUC();

  // Eager load any components that are not defined in the Custom Elements Manifest
  await Promise.allSettled(eagerLoad?.map((tagName) => register(tagName)));

  // Watch for any new elements that are added to the DOM
  observer = new MutationObserver((mutations) => {
    for (const { addedNodes } of mutations) {
      for (const node of addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          load(node);
        }
      }
    }
  });
  
  load(root);
  observer.observe(root, { subtree: true, childList: true });
}

start();
