import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  render() {
    return html`
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
    `;
  }

  private _onClick() {
    this.count++;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}