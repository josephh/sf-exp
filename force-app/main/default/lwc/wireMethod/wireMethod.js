import { LightningElement, wire, api} from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';

export default class WireMethod extends LightningElement {

  @wire(getAllCases) cases;

  @api records
  @api err

  @wire(getAllCases) wiredCases({ data, error }) {
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
