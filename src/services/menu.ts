import type { Services } from "../types";

import { api } from "./api";
import { store } from "./store";

export const menu: Services["Menu"] = {
  initialize: () => {
    api
      .fetchMenu()
      .then((menu) => {
        console.log(menu);
        store.menu = menu;
      })
      .catch((error) => console.log(error));
  },
};
