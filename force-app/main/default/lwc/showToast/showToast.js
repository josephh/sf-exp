import { LightningElement } from 'lwc'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ShowToast extends LightningElement {

  handleClick() {
    console.log('inside handle click!')
    const toast = new ShowToastEvent({ title: 'Sample Toast', message: 'simple message' })
    this.dispatchEvent(toast)

    const toast2 = new ShowToastEvent({ title: 'Sample Toast', message: 'error message', variant: 'error' })
    this.dispatchEvent(toast2)

    const toast3 = new ShowToastEvent({ title: 'Sample Toast', message: 'success message', variant: 'success'  })
    this.dispatchEvent(toast3)

    const toast4 = new ShowToastEvent({ title: 'Sample Toast', message: 'warning message', variant: 'warning'  })
    this.dispatchEvent(toast4)
  }

}
