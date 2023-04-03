import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroupDirective, FormControl, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoaderService } from '../loader/loader.service';
import { Router } from '@angular/router';


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

export class LoginComponent implements OnInit {
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



  formObject: any = {
    "name": "",
    "password": ""
  };
  public loginForm!: FormGroup;

  // Formbuilder: any;
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
  // ngOnInit(): void {
  //   this.formObject = this.Formbuilder.group({
  //     name: [''],
  //     password: ['']
  //   })
  // }
  constructor(private formBuilder: FormBuilder, public loaderService: LoaderService, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }


  // submit() {
  //   // console.log(this.formObject.name);
  //   // console.log(this.formObject.password);
  //   // console.log(JSON.stringify(this.formObject.name))
  //   // console.log(JSON.stringify(this.formObject.password))
  //   // console.log(JSON.stringify(this.json))
  //   // var str = JSON.stringify(this.formObject)
  //   // console.log(str)

  //   // var theJSON = JSON.stringify(this.formObject)
  //   // var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
  //   // var a = document.createElement('a');
  //   // a.href = uri;
  //   // a.innerHTML = "Button";
  //   // document.body.appendChild(a)
  //   //this.name = "Mr " + this.name;

  // }

  //json-server --watch db.json


  postUserData() {
    this.http.post<any>("http://localhost:3000/user", this.loginForm.value)
      .subscribe({
        next: () => {
          alert("User Data saved "), setTimeout(() => {
            this.loginForm.reset()
            this.router.navigate(['home'])
          }, 3000);


        },
        error: () => alert("Something wrong")
      })
  }

  visibility() {
    this.showPassword = !this.showPassword
  }


  userkeyUp(event: any) {
    // alert('key');
    // console.log(event);
  }

}

