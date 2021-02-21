import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import localeBr from '@angular/common/locales/pt';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeBr, "pt");
@NgModule({
  declarations: [
    AppComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
