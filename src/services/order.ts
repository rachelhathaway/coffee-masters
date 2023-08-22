import type { Services } from "../types";
import { menu } from "./menu";

const addToCart = async (productId: number) => {
  const itemInCart = window.app.store.cart.find(
    (item) => item.product.id === productId
  );

  if (itemInCart) {
    itemInCart.quantity = itemInCart.quantity + 1;

    window.app.store.cart = [...window.app.store.cart];
  } else {
    const product = await menu.getProductById(productId);

    if (product) {
      window.app.store.cart = [
        ...window.app.store.cart,
        { product, quantity: 1 },
      ];
    }
  }
};

const removeFromCart = (productId: number) => {
  window.app.store.cart = window.app.store.cart.filter(
    (item) => item.product.id !== productId
  );
};

export const order: Services["Order"] = {
  addToCart,
  removeFromCart,
};
