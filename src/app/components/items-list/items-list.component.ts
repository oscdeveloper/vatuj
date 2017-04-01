import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  addItem(): void {
    this.itemList.push({
      id: null,
      name: '',
      price: null
    });
  }

  removeItem(itemToRemove: any): void {
    if ( this.itemList.length > 1 ) { // min one item is always available
      this.itemList = this.itemList.filter(item=>{
            return item !== itemToRemove;
          });
    }
    
  }

  ngOnInit() {
  }

}
