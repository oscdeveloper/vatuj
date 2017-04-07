import { Routes } from '@angular/router';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceNewComponent } from './components/invoice-new/invoice-new.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
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