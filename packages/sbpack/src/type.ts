export type StackblitzEnvironment =
| 'static'
| 'javascript'
| 'vite-static'
| 'typescript'
| 'vue'
| 'vue3'
| 'vite-vue3'
| 'vite-vue3-ts'
| 'react'
| 'vite-react'
| 'vite-react-ts'
| 'angualr'
| 'svelte'
| 'vite-svelte'
| 'solid'
| 'node'
| 'express'
| 'koa'
| 'nextjs'
| 'nuxt3'
| 'next'
| 'slidev'
| 'vitest'

export type ProjectFiles = Record<string, string>
export type OpenFileOption = string | string[]

export type UiViewOption = 'default' | 'preview' | 'editor'

export type UiThemeOption = 'default' | 'light' | 'dark'

export type ProjectDependencies = Record<string, string>
export interface ProjectSettings {
  compile?: {
    trigger?: 'auto' | 'keystroke' | 'save' | string
    action?: 'hmr' | 'refresh' | string
    clearConsole?: boolean
  }
}

export interface Project {
  title: string
  description: string
  template: StackblitzEnvironment
  files: ProjectFiles
  dependencies?: ProjectDependencies
  settings?: ProjectSettings
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

export interface SbpackFile {
  code: string
  hidden?: boolean
  active?: boolean
  readOnly?: boolean
}

export interface SbpackTemplate {
  files: Record<string, SbpackFile>
  dependencies: Record<string, string>
  devDependencies?: Record<string, string>
  entry: string
  main: string
  environment: StackblitzEnvironment
}
