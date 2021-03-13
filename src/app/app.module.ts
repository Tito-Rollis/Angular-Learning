import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularPlaygroundComponent } from './angular-playground/angular-playground.component';

@NgModule({
  declarations: [AppComponent, AngularPlaygroundComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent, AngularPlaygroundComponent],
})
export class AppModule {}
