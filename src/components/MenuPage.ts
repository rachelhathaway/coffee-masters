import { TEMPLATE_IDS } from "../constants";
import css from "./MenuPage.css?inline";
import { BaseComponent } from "./BaseComponent";

export class MenuPage extends BaseComponent {
  constructor() {
    super(TEMPLATE_IDS.menuPage, css);
  }
}

customElements.define("cm-menu-page", MenuPage);
