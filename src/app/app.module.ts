import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KoliBriModule } from '@kolibri/angular';
import { BadgeComponent } from 'src/app/badge';

@NgModule({
  declarations: [AppComponent, BadgeComponent],
  imports: [BrowserModule, KoliBriModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
