import { TEMPLATE_IDS } from "../constants";
import css from "./OrderPage.css?inline";
import { BaseComponent } from "./BaseComponent";

export class OrderPage extends BaseComponent {
  constructor() {
    super(TEMPLATE_IDS.orderPage, css);
  }
}

customElements.define("cm-order-page", OrderPage);
