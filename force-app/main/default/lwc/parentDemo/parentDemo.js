import { LightningElement } from 'lwc';

export default class ParentDemo extends LightningElement {
  handleSimpleEvent() {
    alert('simple event being handled by parent comp')
  }
  handleClick() {
    // call a child component's public method
    this.template.querySelector('c-child-demo').childMethod('first param from parent', 'second...')
  }
}
