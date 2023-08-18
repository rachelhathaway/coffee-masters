import type { Services } from "../types";

import menu from "../data/menu.json";

export const api: Services["Api"] = {
  fetchMenu: async () => menu,
};
