import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {LoginComponent} from "./components/login.component";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignupComponent} from "./components/signup.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AuthServices} from "./services/auth.services";
import {WelcomeComponent} from "./components/welcome.component";
// import {AuthGuard} from "./guards/auth.guard";
import {AuthGuard} from "./guards/auth.guard";

const appRoutes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user/:name',component:WelcomeComponent,canActivate:[AuthGuard]}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthServices,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
