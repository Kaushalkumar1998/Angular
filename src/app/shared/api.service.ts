import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  postData(data: any) {
    return this.http.get('http://localhost:3000/user', data);
  }
  postSignUp(data: any) {
    return this.http.post('http://localhost:3000/register', data);
  }
}
