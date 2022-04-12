import {LitElement, css, html} from "https://cdn.skypack.dev/lit-element";

export class rightArrow  extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      color: {type: String},
    }
  }

  static get styles() {
    return css`
      .svg-right-arrow {
        max-height: 25px
      }
    `
  }
  render() {

    return (
      html`
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-right"
             class="svg-right-arrow svg-inline--fa fa-angle-double-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
          <path fill="#${this.color}"
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
        </svg>
      `)
  }
}

