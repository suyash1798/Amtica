import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControlName, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthServices} from "../services/auth.services";

@Component({
  selector: 'app-welcome',
  template: `
    <div fxFlex fxLayoutAlign="center center" class="mainDiv">
      <mat-card class="mainCard">
        <h1>Welcome {{ email }}</h1>
        <button mat-raised-button type="button" color="accent" button (click)="logout()">Logout</button>
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

    :host {
      height: 100%;
      width: 100%;
    }
  `]
})
export class WelcomeComponent implements OnInit {

  email: string;

  ngOnInit(): void {

    this.email = this.activeRoute.snapshot.paramMap.get('name');
  }

  constructor(private activeRoute: ActivatedRoute,private authService:AuthServices) {

  }

  logout(){
    this.authService.logoutUser();
  }

}
