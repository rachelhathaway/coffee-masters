import { BaseComponent } from "./BaseComponent";

const TEMPLATE_ID = "details-page-template";

export class DetailsPage extends BaseComponent {
  constructor() {
    super(TEMPLATE_ID);
  }
}

customElements.define("cm-details-page", DetailsPage);
