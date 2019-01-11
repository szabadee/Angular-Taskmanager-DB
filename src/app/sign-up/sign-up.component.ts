import { Component, OnInit } from '@angular/core';
import { SignUpModel } from '../sign-up.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public fullnameInvalid = false;
  public emailInvalid = false;
  public passwordInvalid: 'RED' | 'ORANGE' | 'GREEN' = 'RED';

  public signUpModel: SignUpModel = new SignUpModel();

  constructor() { }

  ngOnInit() {
  }

  public getColor(checked: boolean): string {
    return checked ? 'green' : 'red';
  }

  public signUp() {

  }

  public validateFullname(event: any) {
    if (!event.target.value) {
      this.fullnameInvalid = true;
      return;
    }
    const fullname = event.target.value;
    this.fullnameInvalid = !(fullname.charAt(0) === fullname.charAt(0).toUpperCase());
  }

  public validateEmail(event: any) {
    if (!event.target.value) {
      this.emailInvalid = true;
      return;
    }
    const email: string = event.target.value;
    this.emailInvalid = !email.match(/[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.com$/g);
  }

  public validatePassword(event: any) {
    if (!event.target.value) {
      this.passwordInvalid = 'RED';
      return;
    }
    const password: string = event.target.value;
    if (password.match(/[a-z]/g) &&
      password.match(/[0-9]/g) && password.length < 8) {
      this.passwordInvalid = 'RED';
    } else if (password.match(/[a-z]/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g) &&
      (password.length >= 8 && password.length < 14)) {
      this.passwordInvalid = 'ORANGE';
    } else if (password.match(/[a-z]/g) &&
      password.match(/[0-9]/g) && password.match(/[A-Z]/g) &&
      password.match(/(\:|\.|\@|\!)/g) && password.length >= 14) {
      this.passwordInvalid = 'GREEN';
    }
  }

}
