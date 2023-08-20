import { TEMPLATE_IDS } from "../constants";
import css from "./DetailsPage.css?inline";
import { BaseComponent } from "./BaseComponent";

export class DetailsPage extends BaseComponent {
  constructor() {
    super(TEMPLATE_IDS.detailsPage, css);
  }
}

customElements.define("cm-details-page", DetailsPage);
