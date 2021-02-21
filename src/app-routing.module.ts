import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoEncontradoComponent } from './app/nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './app/shared/guards/esta-logado.guard';
import { NaoEstaLogadoGuard } from './app/shared/guards/nao-esta-logado.guard';

const routes: Routes = [{
        path: "login",
        loadChildren: () => import("../src/app/login/login.module").then(m => m.LoginModule),
        canActivate: [NaoEstaLogadoGuard],
    }, {
        path: "home",
        loadChildren: () => import("../src/app/home/home.module").then(m => m.HomeModule),
        canActivate: [EstaLogadoGuard],
    }, {
        path: "extrato",
        loadChildren: () => import("../src/app/extrato/extrato.module").then(m => m.ExtratoModule),
        canActivate: [EstaLogadoGuard],
    }, {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    }, {
        path: "contatos",
        loadChildren: () => import("../src/app/contatos/contatos.module").then(m => m.ContatosModule),
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