import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "../src/app/login/login.component";
import { HomeComponent } from "../src/app/home/home.component";
import { ExtratoComponent } from './app/extrato/extrato.component';
import { NaoEncontradoComponent } from './app/nao-encontrado/nao-encontrado.component';
import { ContatosComponent } from './app/contatos/contatos.component';
import { DetalhesContatoComponent } from './app/contatos/detalhes-contato/detalhes-contato.component';
import { EstaLogadoGuard } from './app/shared/guards/esta-logado.guard';
import { NaoEstaLogadoGuard } from './app/shared/guards/nao-esta-logado.guard';

const routes: Routes = [{
        path: "login",
        component: LoginComponent,
        canActivate: [NaoEstaLogadoGuard],
    }, {
        path: "home",
        component: HomeComponent,
        canActivate: [EstaLogadoGuard],
    }, {
        path: "extrato",
        component: ExtratoComponent,
        canActivate: [EstaLogadoGuard],
    }, {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    }, {
        path: "contatos",
        component: ContatosComponent,
        canActivate: [EstaLogadoGuard],
    }, {
        path: "contatos/:id",
        component: DetalhesContatoComponent,
        canActivate: [EstaLogadoGuard],
    }, {
        path: "**",
        component: NaoEncontradoComponent
    }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }