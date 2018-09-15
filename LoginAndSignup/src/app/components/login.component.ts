import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControlName, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthServices} from "../services/auth.services";

@Component({
  selector: 'app-login',
  template: `
    <div fxFlex fxLayoutAlign="center center" class="mainDiv">
      <mat-card class="mainCard">
        <form (ngSubmit)="login()" [formGroup]="loginForm">
          <div fxLayout="column" fxLayoutGap="10px">
            <mat-form-field>
              <input matInput placeholder="Email" type="email" formControlName="email">
            </mat-form-field>
            <mat-form-field>
              <input matInput placeholder="Password" type="password" formControlName="password">
            </mat-form-field>
            <button mat-raised-button type="submit" color="accent" [disabled]="!this.loginForm.valid">Login</button>
            <button mat-raised-button type="button" color="accent" (click)="signup()">Signup</button>
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
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  constructor(private fb: FormBuilder,private router: Router,private authService:AuthServices) {

  }

  login() {
    console.log(this.loginForm.value);
    this.authService.loginUser(this.loginForm.value).subscribe((res) => {
      console.log('res', res);
      window.localStorage.setItem('token', (res as any));
      this.router.navigate(['/user',(res as any).user.email]);
    });

  }

  signup(){
    this.router.navigate(['/signup']);
  }

}
