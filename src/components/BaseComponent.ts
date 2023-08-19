export class BaseComponent extends HTMLElement {
  templateId: string;

  constructor(templateId: string) {
    super();

    this.templateId = templateId;
  }

  connectedCallback() {
    const template = [...document.querySelectorAll("template")].find(
      (t) => t.id === this.templateId
    );
    const content = template?.content.cloneNode(true);

    if (content) {
      this.appendChild(content);
    }
  }
}
