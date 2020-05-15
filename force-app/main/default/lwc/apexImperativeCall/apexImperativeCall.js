import { LightningElement, track } from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';

export default class ApexImperativeCall extends LightningElement {

  @track subject
  @track records
  @track error

  handleChange(e) {
    const sin = e.target.value;
    this.subject = sin
  }

  handleLoad() {
    getAllCases({ subject: this.subject}) //returns promise
    .then(res => {
      console.log(res)
      this.records = res
    } )
    .catch(error => {
      console.error(res)
      this.error = error
    } )
  }
}
