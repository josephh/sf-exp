import { LightningElement } from 'lwc';

export default class ParentDemo extends LightningElement {
  handleSimpleEvent() {
    alert('simple event being handled by parent comp')
  }
}
