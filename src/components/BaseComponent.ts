export class BaseComponent extends HTMLElement {
  root: ShadowRoot;
  template: HTMLTemplateElement | undefined;

  constructor(templateId: string) {
    super();

    this.root = this.attachShadow({ mode: "open" });
    this.template = [...document.querySelectorAll("template")].find(
      (t) => t.id === templateId
    );
  }

  connectedCallback() {
    const content = this.template?.content.cloneNode(true);

    if (content) {
      this.root.appendChild(content);
    }
  }
}
