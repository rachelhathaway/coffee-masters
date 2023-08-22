import { TEMPLATE_IDS } from "../constants";
import css from "./DetailsPage.css?inline";
import { BasePageComponent } from "./BasePageComponent";
import { menu } from "../services/menu";
import { order } from "../services/order";
import { Product } from "../types";

export class DetailsPage extends BasePageComponent {
  #product?: Product;

  constructor() {
    super(TEMPLATE_IDS.detailsPage, css);
  }

  renderData(product: Product) {
    const h2El = this.getRoot().querySelector("h2");
    const imgEl = this.getRoot().querySelector("img");
    const descriptionEl = this.getRoot().querySelector(".description");
    const priceEl = this.getRoot().querySelector(".price");
    const addToCartEl = this.getRoot().querySelector("button");
    const backEl = this.getRoot().querySelector("a");

    if (h2El) {
      h2El.textContent = product.name;
    }

    if (imgEl) {
      imgEl.src = `/images/${product.image}`;
    }

    if (descriptionEl) {
      descriptionEl.textContent = product.description;
    }

    if (priceEl) {
      priceEl.textContent = String(product.price);
    }

    if (addToCartEl) {
      addToCartEl.addEventListener("click", async () => {
        await order.addToCart(product.id);
        window.app.router.navigateTo("/order");
      });
    }

    if (backEl) {
      backEl.addEventListener("click", (event) => {
        event.preventDefault();
        window.app.router.navigateTo("/");
      });
    }
  }

  async connectedCallback() {
    super.connectedCallback();

    if (!this.dataset.productId) {
      alert("Invalid product ID!");

      return;
    }

    this.#product = await menu.getProductById(
      parseInt(this.dataset.productId, 10)
    );

    if (this.#product) {
      this.renderData(this.#product);
    }
  }
}

customElements.define("cm-details-page", DetailsPage);
