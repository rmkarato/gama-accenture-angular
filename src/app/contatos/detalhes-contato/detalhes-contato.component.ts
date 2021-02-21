import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { Contatos } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  contato: Contatos;

  isLoading: boolean;
  errorNotLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private contatoService : ContatosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idContato = this.route.snapshot.paramMap.get("id");
    this.seeContactDetails(idContato);
  }
  
  seeContactDetails(idContato: string) {
    this.isLoading = true;
    this.errorNotLoading = false;

    this.contatoService.getContato(idContato)
    .pipe(
      take(1),
      finalize(() => this.isLoading = false)
    )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
};

  onSuccess(response: Contatos) {
    this.contato = response;
  };

  onError(error: any) {
    this.errorNotLoading = true;
    console.log(error);
  };

  voltar() {
    this.router.navigate([`contatos`])
  }

}

