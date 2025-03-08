import { Component } from "@wc-toolkit/cem-utilities";

/** An object where the key is the component tag-name. */
export type ComponentConfig = {
  /** The key is the component's tag-name (in lower-case) */
  [key: string]: {
    /** The path to the module where the component is defined */
    importPath: string;
    /** Any components used within this component that will be registered at the same time */
    dependencies?: string[];
  };
};

/** Configuration options for the `updateConfig` function */
export type RuntimeConfiguration = {
  /** Additional components that may not be included in your Custom Elements Manifest */
  components?: ComponentConfig;
  /** The root element to observe for your custom elements */
  rootElement?: Element;
  /** Component tag names that you would like to eager-load */
  eagerLoad: string[];
};

export type LazyLoaderOptions = {
  /** The template for creating the component's import path */
  importPathTemplate?: (name: string, tagName: string) => string;
  /** Path to output directory */
  outdir?: string;
  /** The of the loader file */
  fileName?: string;
  /** Class names of any components you would like to exclude from the custom data */
  exclude?: string[];
  /** Enables logging during the component loading process */
  debug?: boolean;
  /** Adds a prefix to tag name */
  prefix?: string;
  /** Adds a suffix to tag name */
  suffix?: string;
  /** Additional components that may not be included in your Custom Elements Manifest */
  additionalComponents?: ComponentConfig;
  /** Component tag names that you would like to eager-load */
  eagerLoad?: string[];
  /** Prevents plugin from executing */
  skip?: boolean;
  /** A function to return a list of tag names used internally by your component */
  getDependencies?: (component: Component) => string[];
  /** Adds logic to delay content display until components have loaded */
  reducedFOUC?: boolean;
  /** The amount of time the UI will wait for components to load before displaying UI */
  loadTimeout?: number;
  /** The class named used to identify when the components have all loaded */
  loadedClass?: string;
};
