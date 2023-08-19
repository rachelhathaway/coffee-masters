import css from "./OrderPage.css?inline";
import { BaseComponent } from "./BaseComponent";

const TEMPLATE_ID = "order-form-template";

export class OrderPage extends BaseComponent {
  constructor() {
    super(TEMPLATE_ID, css);
  }
}

customElements.define("cm-order-page", OrderPage);
