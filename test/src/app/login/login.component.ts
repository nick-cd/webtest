import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userData = {
      username: "",
      password: ""
    }
  }

  submit() {
    this.router.navigate(['/contactus']);
  }

}
