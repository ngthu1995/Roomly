import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as jwt from "jsonwebtoken";
import * as moment from "moment";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthData } from '../components/auth/auth-data.model';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> cdd393ce8eacf64d2703fd1e59910035393fe184

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number = 0;
  username: string = "";
}
type UserRole = 'user' | 'admin' | 'manager';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticate = false;
  private token: string;
  private user: {
    _id: string;
    email: string;
    role: UserRole;
  };
  private authStatusListener = new BehaviorSubject<boolean>(false);
  private readonly rootURL = "http://localhost:3000/api/users";
  private router: Router
  private decodedToken;
  apptsObservable = new BehaviorSubject([]);





  constructor(private httpClient: HttpClient) {
    this.decodedToken =
      JSON.parse(localStorage.getItem("user_decoded")) || new DecodedToken();
  }
  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token);

    localStorage.setItem("user_auth", token);
    localStorage.setItem("user_decoded", JSON.stringify(this.decodedToken));

    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  public register(userData: any): Observable<any> {
    return this.httpClient.post(this.rootURL + "/register", userData);
  }

<<<<<<< HEAD
  public login(email: string, password: string): Observable<any> {
=======
  login(email: string, password: string) {
>>>>>>> cdd393ce8eacf64d2703fd1e59910035393fe184
    const authData: AuthData = { email: email, password: password }
    return this.httpClient.post<{
      token: string; user: {
        _id: string;
        email: string;
        role: 'user' | 'admin' | 'manager';
      };
    }>(this.rootURL + "/login", authData).pipe(
      tap(response => {
        const { token, user } = response;
        this.token = token;
        this.user = user;
        console.log(user)
        if (token) {
          this.saveAuthData(token, user);
          this.isAuthenticate = true;
          this.authStatusListener.next(true);
          // this.router.navigate([''])
        }
      })
    );
  }

  getCurrentUser() {
    return this.user;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  private saveAuthData(
    token: string,
    user: { _id: string; email: string; role: 'user' | 'admin' | 'manager' }
  ) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getCurrentUser() {
    return this.user;
  }

  public logOut() {
    this.clearAuthData();
    this.isAuthenticate = false;
    // localStorage.removeItem("user_auth");
    // localStorage.removeItem("user_decoded");

    // this.decodedToken = new DecodedToken();
  }

  public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public getUserName(): string {
    return this.decodedToken.username;
  }

  public getUserId(): string {
    return this.decodedToken.userId;
  }

  public getAuthToken(): string {
    return localStorage.getItem("user_auth");
  }


  // Get all users information
  getUsers() {
    return this.httpClient.get('http://localhost:3000/api/users/list').subscribe((appts: any) => {
      this.apptsObservable.next(appts);
    })
  }

  checkMangerRole(managerString: string) {
    if (!this.user || !this.token) {
      console.log('sanity checked');
      return of(null);
    }

    /**
     * TODO: checkManager route on backend. req.body = {managerString: string}
     */
    return this.httpClient.post<any>('http://localhost:3000/api/users/checkManager', {
      managerString
    });
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.token = null;
    this.user = null;
    this.isAuthenticate = false;
    this.authStatusListener.next(false);
  }


  public sendMessage(userData: any) {
    return this.httpClient.post(this.rootURL + "/sendemail", userData);
  }
}
