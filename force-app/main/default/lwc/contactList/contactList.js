import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {
  contacts = [
    { id: 1,
      name: "joe j",
      email: "joe@gmail.com",
      telephone: "0113 2338888"
    },
    {
      id: 2,
      name: "jock k",
      email: "jock@gmail.com",
      telephone: "0113 2338888"
    },
    {
      id: 3,
      name: "jon N",
      email: "jon@gmail.com",
      telephone: "0113 2338888"
    }
  ]
}
