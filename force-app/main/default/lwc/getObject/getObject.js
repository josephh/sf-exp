import { LightningElement, wire, api } from 'lwc'
import { getObjectInfo } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'

export default class GetObject extends LightningElement {

  @wire (getObjectInfo, { objectApiName: ACCOUNT_OBJECT})
    wiredAccount({data, error}) {
        if(data) {
          console.log(' Account Object info ??? >>> ', data)
        }
        if(error) {
          console.log(error)
        }
    }
    // 
    // handleCreate() {
    //   console.log(' in handle create')
    //   const fields = {}
    //   fields[NAME_FIELD.fieldApiName] = 'JJ'
    //   const accountRecord = {apiName: ACCOUNT_OBJECT.objectApiName, fields: fields}
    //
    //   console.log(' NAME_FIELD ? ', NAME_FIELD.fieldApiName)
    //   console.log(' ACCOUNT_OBJECT ? ', ACCOUNT_OBJECT)
    //
    //   createRecord(accountRecord)
    //   .then(result => {
    //     const id = result.id
    //     alert('record created! : with id ' + id)
    //   })
    //   .catch(error => console.error('error: ', error))
    // }

}
