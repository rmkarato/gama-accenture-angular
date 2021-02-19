import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingExerciseComponent } from './components/data-binding-exercise/data-binding-exercise.component';
import { ExerccioNgclassComponent } from './components/exerccio-ngclass/exerccio-ngclass.component';
import { ExercicioContadorComponent } from './components/exercicio-contador/exercicio-contador.component';
import { ExercicioDiretivasComponent } from './components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './components/exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DataBindingExerciseComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExerccioNgclassComponent,
    ExercicioPipesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DataBindingExerciseComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExerccioNgclassComponent,
    ExercicioPipesComponent,
  ]
})
export class SharedModule { }
