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
  providers: [ApiService],
})
export class LoginComponent implements OnInit {
  // we have to define OnInit and AfterviewInit here "implements"

  showPassword: boolean = true;
  isUnchanged = true;
  matcher = new MyErrorStateMatcher();
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public loaderService: LoaderService,
    private router: Router,
    private appService: ApiService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$*])[a-zA-Z0-9!@#$*]{10}'
          ),
        ],
      ],
      // checkbox: ['', [Validators.required]],
    });
  }
  visibility() {
    this.showPassword = !this.showPassword;
  }
  postUserData() {
    this.loaderService.isLoading.next(true);
    this.appService.postData(this.loginForm.value).subscribe({
      next: () => {
        setTimeout(() => {
          window.location.reload();
          this.loaderService.isLoading.next(false);
        }, 3000);
        alert('user data is saved');
      },
      error: () => {
        alert('Something is wrong');
      },
    });
  }
}
