

export type SandboxEnvironment =
| "angular-cli"
| "create-react-app"
| "create-react-app-typescript"
| "svelte"
| "parcel"
| "vue-cli"
| "static"
| "solid";



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
