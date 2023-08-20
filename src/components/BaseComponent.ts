export class BaseComponent extends HTMLElement {
  private template: HTMLTemplateElement | undefined;

  constructor(templateId: string) {
    super();

    this.template = [...document.querySelectorAll("template")].find(
      (t) => t.id === templateId
    );
  }

  connectedCallback() {
    const content = this.template?.content.cloneNode(true);

    if (content) {
      this.appendChild(content);
    }
  }
}
