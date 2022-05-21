

export type StackblitzEnvironment =
| "static"
| "javascript"
| "vite-static"
| "typescript"
| "vue"
| "vue3"
| "vite-vue3"
| "vite-vue3-ts"
| "react"
| "vite-react"
| "vite-react-ts"
| "angualr"
| "svelte"
| "vite-svelte"
| "solid"
| "node"
| "express"
| "koa"
| "nextjs"
| "nuxt3"
| "next"
| "slidev"
| "vitest"

export interface ProjectFiles {
  [path: string]: string;
}

export interface ProjectDependencies {
  [name: string]: string;
}

export interface Project {
  title: string;
  description: string;
  template: StackblitzEnvironment;
  /**
   * Provide project files, as code strings.
   *
   * Binary files and blobs are not supported.
   */
  files: ProjectFiles;
  /**
   * Define npm dependencies for EngineBlock projects.
   *
   * For WebContainers-based projects (when using `template: 'node'`), this is ignored,
   * and dependencies must be defined in the `package.json` file in the `files` object.
   */
  dependencies?: ProjectDependencies;
  settings?: ProjectSettings;
  /**
   * @deprecated Tags are ignored by the StackBlitz SDK since v1.5.4
   */
  tags?: string[];
}


// {
//   files: {[path: string]: string};
//   title: string;
//   description: string;
//   template: 'angular-cli' | 'create-react-app' | 'typescript' | 'javascript' | 'polymer' | 'vue' | 'node';
//   dependencies?: {[name: string]: string};
//   settings?: {
//     compile?: {
//       trigger?: 'auto' | 'keystroke' | 'save';
//       action?: 'hmr' | 'refresh';
//       clearConsole?: boolean;
//     };
//   };
// }

export interface SandpackFile {
  code: string;
  hidden?: boolean;
  active?: boolean;
  readOnly?: boolean;
}



export interface SandboxTemplate {
  files: Record<string, SandpackFile>;
  dependencies: Record<string, string>;
  devDependencies?: Record<string, string>;
  entry: string;
  main: string;
  environment: SandboxEnvironment;
}
