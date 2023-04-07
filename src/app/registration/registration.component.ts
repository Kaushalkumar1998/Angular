import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { LoaderService } from '../loader/loader.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public loader: LoaderService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confPassword: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      postal: ['', [Validators.required, Validators.maxLength(6)]],
    });
  }
  showpassword: boolean = true;

  public registerForm: FormGroup;

  visibility() {
    this.showpassword = !this.showpassword;
  }
  visible() {
    this.showpassword = !this.showpassword;
  }
  object: any = {};
  register() {
    this.loader.isLoading.next(true);
    this.apiService.postSignUp(this.registerForm.value).subscribe({
      next: () => {
        setTimeout(() => {
          window.location.reload();
          this.loader.isLoading.next(false);
        }, 3000);
        alert('user Data is saved');
      },
      error: () => {
        alert('Something Wrong with Signup');
      },
    });
  }
}
