import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalToolbarComponent } from './gal-toolbar/gal-toolbar.component';

import { GalAccountPageComponent } from './gal-account-page/gal-account-page.component';
import { GalGalleryComponent } from './gal-gallery/gal-gallery.component';
import { LightboxModule } from 'ngx-lightbox';



@NgModule({
  declarations: [
    AppComponent,
    GalToolbarComponent,
    GalAccountPageComponent,
    GalGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
