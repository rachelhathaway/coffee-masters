import { TEMPLATE_IDS } from "../constants";
import { BaseComponent } from "./BaseComponent";
import { order } from "../services/order";

export class ProductItem extends BaseComponent {
  constructor() {
    super(TEMPLATE_IDS.productItem);
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.dataset.product) {
      const product = JSON.parse(this.dataset.product);
      const nameEl = this.querySelector("h4");
      const priceEl = this.querySelector("p.price");
      const imageEl = this.querySelector("img");
      const linkEl = this.querySelector("a");

      if (nameEl) {
        nameEl.textContent = product.name;
      }

      if (priceEl) {
        priceEl.textContent = `$${product.price.toFixed(2)}`;
      }

      if (imageEl) {
        imageEl.src = `/images/${product.image}`;
      }

      if (linkEl) {
        linkEl.addEventListener("click", (event) => {
          const target = event.target as HTMLAnchorElement | HTMLButtonElement;

          if (target?.tagName.toLowerCase() == "button") {
            order.addToCart(product.id);
          } else {
            window.app.router.navigateTo(`/product-${product.id}`);
          }

          event.preventDefault();
        });
      }
    }
  }
}

customElements.define("cm-product-item", ProductItem);
