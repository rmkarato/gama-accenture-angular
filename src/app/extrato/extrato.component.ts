import { Component, OnInit } from '@angular/core';
import { ExtratoService } from './extrato.service';

import { Transacao } from "./extrato.interfaces";

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[];
  pagina = 1;

  isLoading: boolean;
  errorNotLoading: boolean;

  constructor(
    private extratoService: ExtratoService
  ) { };

  ngOnInit(): void {
    this.carregarExtrato();
  };

  carregarExtrato() {
    this.isLoading = true;
    this.errorNotLoading = false;

    const page = 1;

    this.extratoService.getTransacoes(this.pagina)
    .pipe(
      finalize(() => this.isLoading = false)
    )
      .subscribe(
        response => this.onSuccess(response), 
        error => this.onError(error)
      )
  };

  onSuccess(response: Transacao[]) {
      this.transacoes = response;
  };

  onError(error: any) {
    this.errorNotLoading = true;
    console.log(error);
  };

  paginaAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }

  proximaPagina() {
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }
}
