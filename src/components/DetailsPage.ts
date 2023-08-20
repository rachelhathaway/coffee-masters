import { TEMPLATE_IDS } from "../constants";
import css from "./DetailsPage.css?inline";
import { BasePageComponent } from "./BasePageComponent";

export class DetailsPage extends BasePageComponent {
  constructor() {
    super(TEMPLATE_IDS.detailsPage, css);
  }
}

customElements.define("cm-details-page", DetailsPage);
