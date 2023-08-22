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
window.addEventListener("appcartchange", () => {
  const badge = document.getElementById("badge");
  const quantity = window.app.store.cart.reduce(
    (total, current) => total + current.quantity,
    0
  );

  if (badge) {
    if (quantity) {
      badge.innerText = String(quantity);
      badge.removeAttribute("hidden");
    } else {
      badge.setAttribute("hidden", "true");
      badge.innerText = "";
    }
  }
});
