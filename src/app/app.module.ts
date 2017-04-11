import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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

import { PriceFormatPipe } from './pipes/price-format.pipe';
import { PriceFormatDirective } from './directives/price-format.directive';
import { BillToComponent } from './components/bill-to/bill-to.component';

export function configFactory(configService: ConfigService) {
  return () => {
    return configService.init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    InvoiceNewComponent,
    InvoiceListComponent,
    PageNotFoundComponent,
    DialogAboutComponent,
    ItemsListComponent,
    SellerComponent,
    PriceFormatPipe,
    PriceFormatDirective,
    BillToComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    },
    ConfigService,
    Title
  ],
  entryComponents: [
    DialogAboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
