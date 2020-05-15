import { LightningElement, wire, api, track} from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';

export default class WireMethod extends LightningElement {

  @wire(getAllCases) cases;
  @track subject

  handleChange(e) {
    const s = e.target.value
    this.subject = s
  }

  @api records
  @api err

  @wire(getAllCases, {subject: this.subject})
  wiredCases({ data, error }) {
    if(data) {
      this.records = data;
      this.err = undefined;
    }
    if(error) {
      this.err = error;
      this.records = undefined;
    }
  }

}
