import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeInSrcComponent } from 'src/lib-copy/components/badge';
import { BadgeComponent } from 'ng-lib/dist/badge';

@NgModule({
  declarations: [AppComponent, BadgeInSrcComponent],
  imports: [BrowserModule, BadgeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
