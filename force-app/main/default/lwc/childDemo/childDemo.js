import { LightningElement, api } from 'lwc';

export default class ChildDemo extends LightningElement {

  @api name = 'joe'
  @api pagenumber
  @api contact

  handleEvent() {
    const e = new CustomEvent('simple')
    this.dispatchEvent(e)
  }
}
