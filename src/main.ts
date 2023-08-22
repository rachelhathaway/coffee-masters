import { menu } from "./services/menu";
import { router } from "./services/router";
import { storeProxy } from "./services/store";

const app = {
  router,
  store: storeProxy,
};

window.app = app;

const main = () => {
  router.initialize();
  menu.initialize();
};

window.addEventListener("DOMContentLoaded", main);
