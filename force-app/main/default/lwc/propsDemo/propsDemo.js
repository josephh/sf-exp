import { LightningElement, track, api } from 'lwc';

export default class PropsDemo extends LightningElement {
  @track message = 'unset'

  @api  message1 = 'another'

  handleChange(e) {
    if(e.target.name === 'message1') this.message1 = e.target.value
    else this.message = e.target.value
  }
}
