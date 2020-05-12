import { LightningElement, api } from 'lwc';

export default class OpportunityDetail extends LightningElement {
  // we use the metadata to restrict use of this component ONLY to record pages where these
  // auto-populated fields would be available
  @api recordId;
  @api objectApiName;

  constructor() {
    // needs super if we explicitly use constructor
    super()
    console.log('Record id: ', this.recordId)
    console.log('object api name: ', this.objectApiName)
  }
}
