import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  FormGroupDirective,
  FormControl,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoaderService } from '../loader/loader.service';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // we have to define OnInit and AfterviewInit here "implements"

  showPassword: boolean = true;
  isUnchanged = true;
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(7),
    Validators.maxLength(15),
  ]);
  checkbox = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  list: any = ['Pradeep', 'Sunil', 'Amit'];
  formObject: any = {
    name: '',
    password: '',
  };
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public loaderService: LoaderService,
    private http: HttpClient,
    private router: Router,
    private appService: ApiService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });
    this.appService.postUser;
  }

  //json-server --watch db.json

  postUserData() {
    this.loaderService.isLoading.next(true);
    this.http
      .post<any>('http://localhost:3000/user', this.loginForm.value)
      .subscribe({
        next: () => {
          setTimeout(() => {
            this.loginForm.reset();
            this.loaderService.isLoading.next(false);
            //  this.router.navigate(['home'])
          }, 3000);
          // alert("User Data saved ");
        },
        error: () => alert('Something wrong'),
      });
  }

  visibility() {
    this.showPassword = !this.showPassword;
  }
  userkeyUp(event: any) {
    // alert('key');
    // console.log(event);
  }
}
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
//"^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$"
