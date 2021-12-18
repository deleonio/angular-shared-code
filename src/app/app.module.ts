import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeComponent } from 'ng-lib/components/badge';
import { BadgeInSrcComponent } from 'src/lib-copy/components/badge';

@NgModule({
  declarations: [AppComponent, BadgeComponent, BadgeInSrcComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
