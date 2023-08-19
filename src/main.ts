import { menu } from "./services/menu";
import { router } from "./services/router";
import { store } from "./services/store";

import { DetailsPage } from "./components/DetailsPage";
import { MenuPage } from "./components/MenuPage";
import { OrderPage } from "./components/OrderPage";

const main = () => {
  router.initialize();
  menu.initialize().then((menuItems) => {
    store.menu = menuItems ?? [];
  });
};

window.addEventListener("DOMContentLoaded", main);
