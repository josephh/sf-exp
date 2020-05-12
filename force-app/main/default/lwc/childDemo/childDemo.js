import { LightningElement, api, track } from 'lwc';

export default class ChildDemo extends LightningElement {

  @api name = 'joe'
  @api pagenumber
  @api contact

  @track date = new Date()

  @api
  childMethod(a, b) {
      this.name = a
      this.pagenumber = b
      this.date = new Date()
  }

  handleEvent() {
    const e = new CustomEvent('simple')
    this.dispatchEvent(e)
  }
}
