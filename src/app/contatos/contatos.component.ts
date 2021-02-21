import { Component, OnInit } from '@angular/core';
import { ContatosService } from './contatos.service';

import { Contatos } from './contatos.interfaces';

import { take, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Contatos[];

  isLoading: boolean;
  errorNotLoading: boolean;

  constructor(
    private contatosService: ContatosService
  ) { };

  ngOnInit(): void {
    this.carregarContatos();
  };

  carregarContatos() {
    this.isLoading = true;
    this.errorNotLoading = false;

    this.contatosService.getContatos()
    .pipe(
      take(1),
      finalize(() => this.isLoading = false)
    )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  };

  onSuccess(response: Contatos[]) {
    this.contatos = response;
  };

  onError(error: any) {
    this.errorNotLoading = true;
    console.log(error);
  };

}
