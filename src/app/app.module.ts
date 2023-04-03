import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginBootomComponent } from './login-bootom/login-bootom.component';
import { HomeComponent } from './home/home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from "@angular/material/slide-toggle"
import { AutocompleteComponent } from './home/autocomplete.component';
import { StreetComponent } from './home/street.component';
import { BadgesComponent } from './home/badges.component';
import { MatBadgeModule } from '@angular/material/badge';
import { BottomsheetComponent } from './home/bottomsheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { bottomsheetmainComponent } from './home/bottomsheetmain.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CubeComponent } from './cube/cube.component';
import { AngularJsonFormModule } from 'angular-json-form';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavComponent } from './nav/nav.component';
import { InterceptorService } from './loader/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    LoginBootomComponent,
    HomeComponent,
    AutocompleteComponent,
    StreetComponent,
    BadgesComponent,
    BottomsheetComponent,
    bottomsheetmainComponent,
    CubeComponent,
    NavComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    AngularJsonFormModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressBarModule,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 