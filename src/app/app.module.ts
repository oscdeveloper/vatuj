import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app-routes-config';


import { ConfigService } from './services/config.service';
import { InvoiceListComponent } from './pages/invoice-list/invoice-list.component';
import { InvoiceNewComponent } from './pages/invoice-new/invoice-new.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceNewComponent,
    InvoiceListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    MaterialModule
  ],
  providers: [
    ConfigService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
