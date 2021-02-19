import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DataBindingExerciseComponent } from './data-binding-exercise/data-binding-exercise.component';
import { ExercicioContadorComponent } from './exercicio-contador/exercicio-contador.component';
import { ExercicioDiretivasComponent } from './exercicio-diretivas/exercicio-diretivas.component';
import { ExerccioNgclassComponent } from './exerccio-ngclass/exerccio-ngclass.component';
import { ExercicioPipesComponent } from './exercicio-pipes/exercicio-pipes.component';

registerLocaleData(localeBr, "pt");
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DataBindingExerciseComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExerccioNgclassComponent,
    ExercicioPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
