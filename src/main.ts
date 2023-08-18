import { menu } from "./services/menu";
import { router } from "./services/router";

const main = () => {
  router.initialize();
  menu.initialize();
};

window.addEventListener("DOMContentLoaded", main);
