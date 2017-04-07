import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'invoice-new',
  templateUrl: './invoice-new.component.html'
})
export class InvoiceNewComponent implements OnInit {

  title: string = 'New invoice';

  constructor(
    private configService: ConfigService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.configService.setPageTitle(this.title);
  }

}
