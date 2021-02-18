import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DataBindingExerciseComponent } from './data-binding-exercise/data-binding-exercise.component';
import { ExercicioContadorComponent } from './exercicio-contador/exercicio-contador.component';
import { ExercicioDiretivasComponent } from './exercicio-diretivas/exercicio-diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DataBindingExerciseComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
