export type Product = {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
};

export type ProductInCart = {
  product: Product;
  quantity: number;
};

export type Products = Product[];

export type ProductsInCart = ProductInCart[];

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
  Order: {
    addToCart: (productId: number) => Promise<void>;
    removeFromCart: (productId: number) => void;
  };
  Router: {
    initialize: () => void;
    navigateTo: (url: string, addToHistory?: boolean) => void;
  };
  Store: {
    menu: MenuItems;
    cart: ProductsInCart;
  };
};

export type App = {
  router: Services["Router"];
  store: Services["Store"];
};

export type User = {
  fullName: string;
  email: string;
  phone: string;
};
