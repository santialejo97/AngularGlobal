import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { UserLogin, RespDB } from '../interfaces/userAuth.interfaces';
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

  getToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(data: UserLogin): Observable<RespDB> {
    return this.http.post<RespDB>(`${this.url}/auth/login`, data).pipe(
      tap(({ ok, userDB, token }) => {
        this.user = new UserModel(userDB._id, userDB.email, userDB.name);
        this.getToken(token);
        return userDB;
      })
    );
  }
}
