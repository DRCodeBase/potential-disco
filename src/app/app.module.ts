import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretSantaModule } from './modules/secret-santa/secret-santa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecretSantaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
