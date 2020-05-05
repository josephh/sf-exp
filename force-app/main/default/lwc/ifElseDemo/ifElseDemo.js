import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
  val = 0
  isValGreaterThanZero() {
    return this.val
  }
  incrementVal() {
    this.val += 1
  }
  decrementVal() {
    this.val -= 1
  }
}
