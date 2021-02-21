import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contatos } from './contatos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getContatos() {
    return this.http.get<Contatos[]>(`${this.API_URL}/contatos`)
  }

  getContato(id: string) {
    return this.http.get<Contatos>(`${this.API_URL}/contatos/${id}`)
  }

  createContact(contato: Contatos) {
    return this.http.post<Contatos[]>(`${this.API_URL}/contatos`, contato)
  }

  updateContact(id: string, contato: Contatos) {
    return this.http.put<Contatos[]>(`${this.API_URL}/contatos/${id}`, contato)
  }

  deleteContact(id: string) {
    return this.http.delete<Contatos>(`${this.API_URL}/contatos/${id}`)
  }
}
