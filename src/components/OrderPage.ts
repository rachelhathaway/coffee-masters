import type { User } from "../types";
import { EVENTS, TEMPLATE_IDS } from "../constants";
import css from "./OrderPage.css?inline";
import { BasePageComponent } from "./BasePageComponent";

interface OrderFormElements extends HTMLFormControlsCollection {
  fullName: HTMLInputElement;
  phone: HTMLInputElement;
  email: HTMLInputElement;
}

export class OrderPage extends BasePageComponent {
  #user: User = {
    fullName: "",
    phone: "",
    email: "",
  };

  setFormBindings(form: HTMLFormElement) {
    this.#user = new Proxy(this.#user, {
      set(target: User, property: keyof User, value: string) {
        target[property] = value;

        const formElements = form.elements as OrderFormElements;

        formElements[property].value = value;

        return true;
      },
    });

    Array.from(form.elements).forEach((el) => {
      el.addEventListener("change", () => {
        const name = (el as HTMLInputElement).name;
        const value = (el as HTMLInputElement).value;

        if (name && value) {
          this.#user[name as keyof User] = value;
        }
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      alert(`Thanks for your order ${this.#user.fullName}!`);

      this.#user.fullName = "";
      this.#user.email = "";
      this.#user.phone = "";
    });
  }

  constructor() {
    super(TEMPLATE_IDS.orderPage, css);
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener(EVENTS.appCartChange, () => {
      this.render();
    });

    this.render();

    const form = this.getRoot().querySelector("form");

    if (form) {
      this.setFormBindings(form);
    }
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

    if (listEl) {
      let total = 0;

      for (const itemInCart of window.app.store.cart) {
        const item = document.createElement("cm-cart-item");
        item.dataset.item = JSON.stringify(itemInCart);
        total += itemInCart.quantity * itemInCart.product.price;
        listEl.appendChild(item);
      }

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
