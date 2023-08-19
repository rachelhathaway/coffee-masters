export class BaseComponent extends HTMLElement {
  root: ShadowRoot;
  templateId: string;

  constructor(templateId: string) {
    super();

    this.templateId = templateId;
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = [...document.querySelectorAll("template")].find(
      (t) => t.id === this.templateId
    );
    const content = template?.content.cloneNode(true);

    if (content) {
      this.root.appendChild(content);
    }
  }
}
