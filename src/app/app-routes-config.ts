import { Routes } from '@angular/router';
import { InvoiceListComponent } from './pages/invoice-list/invoice-list.component';
import { InvoiceNewComponent } from './pages/invoice-new/invoice-new.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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