/**
 * Number of milliseconds between attempts to get a response from an embedded frame
 */
export const CONNECT_INTERVAL = 500

/**
 * How many times should we try to get an init response from an embedded frame
 */
export const CONNECT_MAX_ATTEMPTS = 20

/**
 * Default height attribute for iframes
 */
export const DEFAULT_FRAME_HEIGHT = 300

/**
 * Origin of the StackBlitz instance
 */
export const DEFAULT_ORIGIN = 'https://stackblitz.com'

/**
 * List of supported template names.
 */
export const BASE_TEMPLATES = [
  'create-react-app',
  'angular-cli',
  'javascript',
  'polymer',
  'typescript',
  'vue',
] as const
export const JAVASCRIPT_TEMPLATES = [
  'python',
] as const
export const PROJECT_TEMPLATES = [
  ...BASE_TEMPLATES,
  ...JAVASCRIPT_TEMPLATES,
  'typescript',
  'nuxt3',
  'vite-react',
  'vite-vue3',
  'vitest',
] as const

