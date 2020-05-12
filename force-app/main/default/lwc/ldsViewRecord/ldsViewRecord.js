import { LightningElement, api } from 'lwc';

export default class LdsViewRecord extends LightningElement {
  @api recordId;
  @api objectApiName;

  constructor() {
    // needs super if we explicitly use constructor
    super()
  }

  handleSuccess() {
    alert('form success')
  }
  
  handleSubmit() {
    alert('form submit')
  }

  handleError() {
    alert('error')
  }

}
