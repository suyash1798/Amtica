import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControlName, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthServices} from "../services/auth.services";

@Component({
  selector: 'app-signup',
  template: `
    <div fxFlex fxLayoutAlign="center center" class="mainDiv">
      <mat-card class="mainCard">
        <form (ngSubmit)="signup()" [formGroup]="signupForm">
          <div fxLayout="column" fxLayoutGap="10px">
            <mat-form-field>
              <input matInput placeholder="Email" type="email" formControlName="email">
            </mat-form-field>
            <mat-form-field>
              <input matInput placeholder="Password" type="password" formControlName="password">
            </mat-form-field>
            <button mat-raised-button color="accent" [disabled]="!this.signupForm.valid" type="submit">Signup</button>
            <button mat-raised-button type="button" color="accent" (click)="login()">Login</button>
          </div>
        </form>
      </mat-card>    
    </div>
  `,
  styles: [`
    .mainCard {
      width: 36%;
      height: 36%;
    }

    .mainDiv {
      height: 100%;
      width: 100%;
    }

    :host{
      height: 100%;
      width: 100%;
    }
  `]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  constructor(private fb: FormBuilder,private router: Router,private authService:AuthServices) {

  }

  signup() {
    this.authService.signupUser(this.signupForm.value);
  }

  login(){
    this.router.navigate(['/login']);
  }

}
