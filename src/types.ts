export type Product = {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
};

export type MenuItem = {
  name: string;
  products: Product[];
};

export type MenuItems = MenuItem[];

export type Services = {
  Api: {
    fetchMenu: () => Promise<MenuItems>;
  };
  Menu: {
    initialize: () => void;
  };
  Router: {
    initialize: () => void;
    navigateTo: (url: string, state?: Record<string, any>) => void;
  };
  Store: {
    menu: MenuItems | null;
    cart: Product[];
  };
};
