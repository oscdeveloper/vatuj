import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'seller',
  templateUrl: './seller.component.html'
})
export class SellerComponent implements OnInit {

  seller: any;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.seller = this.configService.getSellerInfo();
  }

}
