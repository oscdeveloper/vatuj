import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ConfigService } from '../../services/config.service';
import { ItemList } from '../../models/item-list.model';

@Component({
  selector: 'app-invoice-new',
  templateUrl: './invoice-new.component.html'
})
export class InvoiceNewComponent implements OnInit {

  title: string = 'New invoice';
  itemList: Array<ItemList> = [];

  constructor(
    private configService: ConfigService,
    private titleService: Title
  ) { }

  addItem(): void {
    this.itemList.push({
      id: null,
      name: '',
      price: 0
    });
  }

  removeItem(itemToRemove: any): void {
    this.itemList = this.itemList.filter((item)=>{
      return item !== itemToRemove;
    });
  }

  ngOnInit() {
    this.configService.setPageTitle(this.title);
  }

}
