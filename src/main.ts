import { menu } from "./services/menu";
import { router } from "./services/router";
import { storeProxy } from "./services/store";

const main = () => {
  router.initialize();
  menu.initialize().then((menuItems) => {
    storeProxy.menu = menuItems ?? [];
  });
};

window.addEventListener("DOMContentLoaded", main);
