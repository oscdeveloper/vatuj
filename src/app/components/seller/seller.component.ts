import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { SellerModel } from '../../models/seller.model';

@Component({
  selector: 'seller',
  templateUrl: './seller.component.html'
})
export class SellerComponent implements OnInit {

  seller: SellerModel;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.seller = this.configService.getSellerInfo();
  }

}
