import { Component, OnInit } from '@angular/core';

export class Contact {
  name: String;
  email: String;
  message: String;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactData: Contact;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
