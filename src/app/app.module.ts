import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import 'hammerjs';

import { ConfigService } from './services/config.service';
import { InvoiceListComponent } from './pages/invoice-list/invoice-list.component';
import { InvoiceNewComponent } from './pages/invoice-new/invoice-new.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { 
    path: 'invoice/new', 
    component: InvoiceNewComponent 
  },
  { 
    path: 'invoice/list', 
    component: InvoiceListComponent 
  },
  { 
    path: '',
    redirectTo: '/invoice/new',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: PageNotFoundComponent
  }
];

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
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [
    ConfigService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
