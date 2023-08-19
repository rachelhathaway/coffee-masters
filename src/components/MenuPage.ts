import css from "./MenuPage.css?inline";
import { BaseComponent } from "./BaseComponent";

const TEMPLATE_ID = "menu-page-template";

export class MenuPage extends BaseComponent {
  constructor() {
    super(TEMPLATE_ID, css);
  }
}

customElements.define("cm-menu-page", MenuPage);
