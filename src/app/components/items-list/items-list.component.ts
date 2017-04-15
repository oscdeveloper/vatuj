import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { ItemsList } from '../../models/item-list.model';
import { TaxList } from '../../models/tax.model';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit {

  private itemsList: Array<ItemsList> = [{
    id: null,
    name: '',
    quantity: 1,
    tax: null,
    taxValue: null,
    priceIncTax: null,
    priceExTax: null,
    totalIncTax: null,
    totalExTax: null
  }];

  private taxList: Array<TaxList> = [
    {
      value: 0,
      name: '0%'
    },
    {
      value: 7,
      name: '7%'
    },
    {
      value: 23,
      name: '0%'
    },
    {
      value: null,
      name: 'zw.'
    },
  ];

  constructor(
    public snackBar: MdSnackBar
  ) {}

  addItem(): void {
    this.itemsList.push({
      id: null,
      name: '',
      quantity: 1,
      tax: null,
      taxValue: null,
      priceIncTax: null,
      priceExTax: null,
      totalIncTax: null,
      totalExTax: null
    });
  }

  removeItem(itemToRemove: any): boolean {
    if ( this.itemsList.length > 1 ) { // min one item is always visible
      this.itemsList = this.itemsList.filter(item => {
        return item !== itemToRemove;
      });
      return true;
    }
    this.openSnackbar();
    return false;
  }

  openSnackbar() {
    this.snackBar.open('At least one item must be visible on the invoice.', null, {
      duration: 3000
    });
  }

  ngOnInit() {
  }

}
