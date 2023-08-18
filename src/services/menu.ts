import type { Services } from "../types";

import { api } from "./api";

export const menu: Services["Menu"] = {
  initialize: () => {
    return api
      .fetchMenu()
      .then((menu) => menu)
      .catch((error) => console.log(error));
  },
};
