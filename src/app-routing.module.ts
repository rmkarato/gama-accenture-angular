import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "../src/app/login/login.component";
import { HomeComponent } from "../src/app/home/home.component";
import { ExtratoComponent } from './app/extrato/extrato.component';
import { NaoEncontradoComponent } from './app/nao-encontrado/nao-encontrado.component';
import { ContatosComponent } from './app/contatos/contatos.component';

const routes: Routes = [{
        path: "login",
        component: LoginComponent,
    }, {
        path: "home",
        component: HomeComponent,
    }, {
        path: "extrato",
        component: ExtratoComponent,
    }, {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    }, {
        path: "contatos",
        component: ContatosComponent,
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