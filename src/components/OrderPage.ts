import { TEMPLATE_IDS } from "../constants";
import css from "./OrderPage.css?inline";
import { BasePageComponent } from "./BasePageComponent";

export class OrderPage extends BasePageComponent {
  constructor() {
    super(TEMPLATE_IDS.orderPage, css);
  }
}

customElements.define("cm-order-page", OrderPage);
