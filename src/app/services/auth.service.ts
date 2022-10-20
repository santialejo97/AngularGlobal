import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import {
  UserLogin,
  RespDB,
  ValidToken,
  UserRegister,
  RespDBRegister,
} from '../interfaces/userAuth.interfaces';
import { UserModel } from '../model/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.url;
  private user!: UserModel;

  constructor(private http: HttpClient) {}

  get getUser() {
    return this.user;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  get getToken(): string {
    return localStorage.getItem('token') || '';
  }

  login(data: UserLogin): Observable<RespDB> {
    return this.http.post<RespDB>(`${this.url}/auth/login`, data).pipe(
      tap(({ userDB, token }) => {
        this.user = new UserModel(userDB._id, userDB.email, userDB.name, []);
        this.setToken(token);
      })
      // catchError((err) => of(err))
    );
  }

  validarToken(): Observable<boolean> {
    return this.http
      .post<ValidToken>(`${this.url}/auth/renew`, { token: this.getToken })
      .pipe(
        tap(({ ok, token }) => {
          this.setToken(token);
          return ok;
        }),
        catchError(({ ok }) => of(ok))
      );
  }

  registerUser(data: UserRegister): Observable<RespDBRegister> {
    return this.http
      .post<RespDBRegister>(`${this.url}/auth/register`, data)
      .pipe(
        tap(({ user, token }) => {
          console.log(user);
          this.user = new UserModel(user._id, user.email, user.name, []);
          this.setToken(token);
        })
      );
  }
}
