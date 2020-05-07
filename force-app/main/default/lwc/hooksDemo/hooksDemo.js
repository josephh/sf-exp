import { LightningElement } from 'lwc';

export default class HooksDemo extends LightningElement {

  name = "joe"

  constructor() {
    // needs super if we explicitly use constructor
    super()
    console.log('inside constructor')
  }

  connectedCallback() {
    console.log('inside connectedCallback')
  }

  disconnectedCallback() {
    console.log('inside disconnectedCallback')
  }

  renderedCallback() {
    console.log('inside renderedCallback')
  }

  // render() {
  //   // commented because it needs to return html template
  // }

  errorCallback(error, stack) {
    console.error(error);
  }

}
