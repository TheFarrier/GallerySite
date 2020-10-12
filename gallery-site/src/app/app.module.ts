import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalToolbarComponent } from './gal-toolbar/gal-toolbar.component';
import { GalCardComponent } from './gal-card/gal-card.component';
import { GalAccountPageComponent } from './gal-account-page/gal-account-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GalToolbarComponent,
    GalCardComponent,
    GalAccountPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
