import { Component, OnInit } from '@angular/core';
import { ExtratoService } from './extrato.service';

import { Transacao } from "./extrato.interfaces";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[];
  isLoading: boolean;
  errorNotLoading: boolean;

  constructor(
    private extratoService: ExtratoService
  ) { }

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.isLoading = true;
    this.errorNotLoading = false;
    this.extratoService.getTransacoes()
      .subscribe(response => {
        this.isLoading = false;
        this.transacoes = response;
      }, error => {
        this.isLoading = false;
        this.errorNotLoading = true;
      });
  }
}
