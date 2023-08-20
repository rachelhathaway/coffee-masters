import { EVENTS, TEMPLATE_IDS } from "../constants";
import { storeProxy } from "../services/store";
import css from "./MenuPage.css?inline";
import { BasePageComponent } from "./BasePageComponent";

export class MenuPage extends BasePageComponent {
  #rootSelector: Element | null = null;

  constructor() {
    super(TEMPLATE_IDS.menuPage, css);
  }

  connectedCallback() {
    super.connectedCallback();

    this.#rootSelector = this.getRoot().querySelector("#menu");

    window.addEventListener(EVENTS.appMenuChange, () => {
      this.render();
    });

    this.render();
  }

  render() {
    if (!this.#rootSelector) return;

    this.#rootSelector.innerHTML = "";

    if (storeProxy.menu.length) {
      for (const category of storeProxy.menu) {
        const categoryEl = document.createElement("li");

        categoryEl.innerHTML = `
          <h3>${category.name}</h3>
          <ul class="category"></ul>
        `;

        for (const product of category.products) {
          const productEl = document.createElement("li");
          const productItemEl = document.createElement("cm-product-item");

          productItemEl.dataset.product = JSON.stringify(product);
          productEl.appendChild(productItemEl);

          categoryEl.querySelector("ul")?.appendChild(productEl);
        }

        this.#rootSelector.appendChild(categoryEl);
      }
    } else {
      this.#rootSelector.innerHTML = "Loading...";
    }
  }
}

customElements.define("cm-menu-page", MenuPage);
