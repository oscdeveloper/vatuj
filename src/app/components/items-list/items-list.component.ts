import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { ItemList } from '../../models/item-list.model';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit {

  itemList: Array<ItemList> = [{
    id: null,
    name: '',
    price: null
  }];

  constructor(
    public snackBar: MdSnackBar
  ) { }

  addItem(): void {
    this.itemList.push({
      id: null,
      name: '',
      price: null
    });
  }

  removeItem(itemToRemove: any): boolean {
    if ( this.itemList.length > 1 ) { // min one item is always available
      this.itemList = this.itemList.filter(item=>{
            return item !== itemToRemove;
          });
      return true;
    }
    this.openSnackbar();
    return false;
  }

  openSnackbar(){
    this.snackBar.open('At least one item must be visible on invoice.', null, {
      duration: 3000
    });
  }  

  ngOnInit() {
  }

}
