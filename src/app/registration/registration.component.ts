import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],

})
export class RegistrationComponent {

  showpassword: boolean = true;
  emailFormControl = new FormControl('', [Validators.required])
  nameFormControl = new FormControl('', [Validators.required])
  lastNameFormControl = new FormControl('', [Validators.required])
  phoneFormControl = new FormControl('', [Validators.required])
  passwordFormControl = new FormControl('', [Validators.required])
  dateFormControl = new FormControl('', [Validators.required])
  postalFormControl = new FormControl('', [Validators.required])
  passFormControl = new FormControl('', [Validators.required])


  visibility() {
    this.showpassword = !this.showpassword
  }
  visible() {
    this.showpassword = !this.showpassword

  }
  object: any = {

  }
  register() {
    var data = JSON.stringify(this.object)
    console.log(data)
  }




}
