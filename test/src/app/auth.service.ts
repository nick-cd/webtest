import { Injectable } from '@angular/core';

export class User {
  "username": String;
  "password": String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
