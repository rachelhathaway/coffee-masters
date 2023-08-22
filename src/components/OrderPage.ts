import { EVENTS, TEMPLATE_IDS } from "../constants";
import css from "./OrderPage.css?inline";
import { BasePageComponent } from "./BasePageComponent";

export class OrderPage extends BasePageComponent {
  constructor() {
    super(TEMPLATE_IDS.orderPage, css);
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener(EVENTS.appCartChange, () => {
      this.render();
    });

    this.render();
  }

  render() {
    const root = this.getRoot();

    const section = root.querySelector("section");

    if (section) {
      if (window.app.store.cart.length === 0) {
        section.innerHTML = `<p class="empty">Your order is empty.</p>`;

        return;
      } else {
        section.innerHTML = `
          <h2>Your Order</h2>
          <ul></ul>
        `;
      }
    }

    const listEl = root.querySelector("ul");
    let total = 0;

    for (const itemInCart of window.app.store.cart) {
      const item = document.createElement("cm-cart-item");
      item.dataset.item = JSON.stringify(itemInCart);
      total += itemInCart.quantity * itemInCart.product.price;

      if (listEl) {
        listEl.appendChild(item);
      }
    }

    if (listEl) {
      const totalEl = document.createElement("li");

      totalEl.innerHTML = `
        <p class="total">Total</p>
        <p class="price-total">$${total.toFixed(2)}</p>
      `;
      listEl.appendChild(totalEl);
    }
  }
}

customElements.define("cm-order-page", OrderPage);
