export class BaseComponent extends HTMLElement {
  private root: ShadowRoot;
  private template: HTMLTemplateElement | undefined;

  private applyStyles(css: string) {
    const styles = document.createElement("style");

    this.root.appendChild(styles);
    styles.textContent = css;
  }

  constructor(templateId: string, css: string) {
    super();

    this.root = this.attachShadow({ mode: "open" });
    this.template = [...document.querySelectorAll("template")].find(
      (t) => t.id === templateId
    );

    this.applyStyles(css);
  }

  connectedCallback() {
    const content = this.template?.content.cloneNode(true);

    if (content) {
      this.root.appendChild(content);
    }
  }
}
