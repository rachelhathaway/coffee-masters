import type { ProductInCart } from "../types";
import { TEMPLATE_IDS } from "../constants";
import { BaseComponent } from "./BaseComponent";
import { order } from "../services/order";

export class CartItem extends BaseComponent {
  constructor() {
    super(TEMPLATE_IDS.cartItem);
  }

  connectedCallback() {
    this.innerHTML = "";
    super.connectedCallback();

    if (this.dataset.item) {
      const item: ProductInCart = JSON.parse(this.dataset.item);

      if (!item) return;

      const quantityEl = this.querySelector(".qty");
      const nameEl = this.querySelector(".name");
      const priceEl = this.querySelector(".price");
      const deleteBtnEl = this.querySelector("a.delete-button");

      if (quantityEl) {
        quantityEl.textContent = String(item.quantity);
      }

      if (nameEl) {
        nameEl.textContent = item.product.name;
      }

      if (priceEl) {
        priceEl.textContent = String(item.product.price.toFixed(2));
      }

      if (deleteBtnEl) {
        deleteBtnEl.addEventListener("click", () => {
          order.removeFromCart(item.product.id);
        });
      }
    }
  }
}

customElements.define("cm-cart-item", CartItem);
