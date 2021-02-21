import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  token: string;

  constructor() { }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user))
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem("token", JSON.stringify(token))
  }

  getUser() {
    if (this.user) {
      return this.user;
    }
    const usuarioGuardado = localStorage.getItem("user");

    if(usuarioGuardado) {
      this.user = JSON.parse(usuarioGuardado)
      return this.user
    }
    return null;
  }

  getToken() {
    if (this.token) {
      return this.token;
    }
    const tokenGuardado = localStorage.getItem("token");

    if(tokenGuardado) {
      this.token = JSON.parse(tokenGuardado)
      return this.token
    }
    return null;
  }

  isLogged(): boolean {
    return this.getUser() && this.getToken() ? true : false;
  }

}
