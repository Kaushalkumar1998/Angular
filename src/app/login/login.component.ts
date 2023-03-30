import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroupDirective, FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  // we have to define OnInit and AfterviewInit here "implements"

  showPassword: boolean = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]);

  matcher = new MyErrorStateMatcher();

  checkbox = new FormControl('', [Validators.required]);





  // json = {
  //   "name": this.formObject,
  //   "password": ""
  // }

  list: any = ["Pradeep", "Sunil", "Amit"];

  name: any = [] = []

  formObject: any = {
    "name": "MR.",
    "password": ""


  };
  // when the application is run first constructor is called
  // constructor() {
  //   // by defalut we can put the username  this is called 2 way data binding;  this.formObject.name = "Previousname;"
  //   alert('con')
  // }

  // after ngOnInit nfAfterViewInit is called
  // ngAfterViewInit(): void {
  //   alert('view')
  // }
  // after constructor ngOninit called
  ngOnInit(): void {

  }


  submit() {
    // console.log(this.formObject.name);
    // console.log(this.formObject.password);
    // console.log(JSON.stringify(this.formObject.name))
    // console.log(JSON.stringify(this.formObject.password))
    // console.log(JSON.stringify(this.json))
    // var str = JSON.stringify(this.formObject)
    // console.log(str)

    var theJSON = JSON.stringify(this.formObject)
    var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
    var a = document.createElement('a');
    a.href = uri;
    a.innerHTML = "Button";
    document.body.appendChild(a)









    //this.name = "Mr " + this.name;

  }

  visibility() {
    this.showPassword = !this.showPassword
  }


  userkeyUp(event: any) {
    // alert('key');
    // console.log(event);
  }

}

