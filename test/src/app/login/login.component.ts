import { Component, OnInit } from '@angular/core';

export class User {
  username: String;
  password: String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: User;

  constructor() { }

  ngOnInit(): void {
    this.userData = {
      username: "",
      password: ""
    }
  }

  submit() {

  }

}
