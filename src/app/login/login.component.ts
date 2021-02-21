import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @ViewChild("emailInput") emailInput: ElementRef;
  @ViewChild("passwordInput") passwordInput: ElementRef;

  email: string;
  password: string;

  isLoading: boolean;
  loginError: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.loginError = false;

    if (!form.valid) {
    
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if(form.controls.email.invalid) {
        this.emailInput.nativeElement.focus();
        return;
      }

      if(form.controls.password.invalid) {
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }
    this.login();
  }

  login() {
    this.isLoading = true;
    this.loginService.logar(this.email, this.password)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        _response => this.onLoginSuccess(),
        _error => this.onErrorLogin()
      )
  }

  onLoginSuccess() {
    this.router.navigate(['home']);
  }

  onErrorLogin() {
    this.loginError = true;
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
