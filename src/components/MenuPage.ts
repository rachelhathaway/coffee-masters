import { TEMPLATE_IDS } from "../constants";
import css from "./MenuPage.css?inline";
import { BasePageComponent } from "./BasePageComponent";

export class MenuPage extends BasePageComponent {
  constructor() {
    super(TEMPLATE_IDS.menuPage, css);
  }
}

customElements.define("cm-menu-page", MenuPage);
