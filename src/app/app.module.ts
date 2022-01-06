import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeInSrcComponent } from 'src/lib-copy/components/badge';
import { LibModule } from 'ng-lib/dist';

@NgModule({
  declarations: [AppComponent, BadgeInSrcComponent],
  imports: [BrowserModule, LibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
