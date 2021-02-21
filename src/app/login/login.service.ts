import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

    logar(email: string, senha: string) {
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
          delay(2000)
        )
      }

      return timer(3000).pipe(
        mergeMap(() => throwError("Usuário ou senha inválido."))
      )
    }
}
