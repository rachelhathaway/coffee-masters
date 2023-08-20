import { App } from "./types";

declare global {
  interface Window {
    app: App;
  }
}
