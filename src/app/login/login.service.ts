import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService
  ) { }

    logar(email: string, senha: string): Observable<LoginResponse> {
      // return this.http.post(this.API_URL + "/auth", contato, this.httpOptions)
      
      if(email === "rmkarato@gmail.com" && senha === "123456") {
        return of({
          usuario: {
            nome: "Renata",
            sobrenome: "Karato",
            email: "rmkarato@gmail.com"
          },
          token: "aJIKSdfKSIk455mdnxbddikmlt5649618GBH$5"
        }).pipe(
          delay(2000),
          tap(response => {
            this.authService.setUser(response.usuario);
            this.authService.setToken(response.token);
          })
        )
      }

      return timer(3000).pipe(
        mergeMap(() => throwError("Usuário ou senha inválido."))
      )
    }
}
