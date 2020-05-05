import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
  number1 = 0
  number2 = 0
  handleChange(e) {
    const v = e.target.value
    const n = e.target.name
    if(n === 'number1') this.number1 = v
    else this.number2 = v
  }
  add() {
    const n = parseInt(this.number1) + parseInt(this.number2)
    alert(n)
  }
  subtract() {
    const n = parseInt(this.number1) - parseInt(this.number2)
    alert(n)
  }
}
