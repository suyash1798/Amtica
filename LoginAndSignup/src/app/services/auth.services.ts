import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

const BaseUrl = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  constructor(private http: HttpClient, private router: Router) {
  }

  loginUser(data) {

    return this.http.post(BaseUrl + '/login', {email: data.email, password: data.password});
  }

  signupUser(data) {
    this.http.post(BaseUrl + '/register', {email: data.email, password: data.password}).subscribe((res) => {
      console.log('res', res);
      this.router.navigate(['/login']);
    })
  }

  logoutUser(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
