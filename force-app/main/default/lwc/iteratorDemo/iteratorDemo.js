import { LightningElement } from 'lwc';

export default class IteratorDemo extends LightningElement {
  contacts = [
    {id: 1, name: "joe", email: 'joe@gmail.com'},
    {id: 2, name: "jock", email: 'jock@gmail.com'},
    {id: 3, name: "jon", email: 'jon@gmail.com'}
  ]
}
