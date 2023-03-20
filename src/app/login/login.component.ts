import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword: boolean = true;

  submit() {
    alert('form submit sucessfull')

  }
  visibility() {
    this.showPassword = !this.showPassword
  }

}