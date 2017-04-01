import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app-routes-config';

import { ConfigService } from './services/config.service';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceNewComponent } from './components/invoice-new/invoice-new.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DialogAboutComponent } from './dialogs/dialog-about/dialog-about.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { SellerComponent } from './components/seller/seller.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceNewComponent,
    InvoiceListComponent,
    PageNotFoundComponent,
    DialogAboutComponent,
    ItemsListComponent,
    SellerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [
    ConfigService,
    Title
  ],
  entryComponents: [
    DialogAboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
