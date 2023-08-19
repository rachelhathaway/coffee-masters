import { menu } from "./services/menu";
import { router } from "./services/router";
import { store } from "./services/store";

const main = () => {
  router.initialize();
  menu.initialize().then((menuItems) => {
    store.menu = menuItems ?? [];
  });
};

window.addEventListener("DOMContentLoaded", main);
