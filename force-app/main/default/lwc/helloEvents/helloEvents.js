import { LightningElement } from 'lwc';

export default class HelloEvents extends LightningElement {
  handleChange(e) {
    alert(`Input was ` + e.target.value)
  }
}
