import type { App } from "./types";
import { menu } from "./services/menu";
import { router } from "./services/router";
import { storeProxy } from "./services/store";

const app: App = {
  router,
  store: storeProxy,
};

(<any>window).app = app;

const main = () => {
  router.initialize();
  menu.initialize().then((menuItems) => {
    storeProxy.menu = menuItems ?? [];
  });
};

window.addEventListener("DOMContentLoaded", main);
