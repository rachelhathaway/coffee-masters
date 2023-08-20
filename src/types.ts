export type Product = {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
};

export type Products = Product[];

export type MenuItem = {
  name: string;
  products: Products;
};

export type MenuItems = MenuItem[];

export type Services = {
  Api: {
    fetchMenu: () => Promise<MenuItems>;
  };
  Menu: {
    getProductById: (productId: number) => Promise<Product | undefined>;
    initialize: () => Promise<void | MenuItems>;
  };
  Router: {
    initialize: () => void;
    navigateTo: (url: string, addToHistory?: boolean) => void;
  };
  Store: {
    menu: MenuItems;
    cart: Products;
  };
};

export type App = {
  router: Services["Router"];
  store: Services["Store"];
};
