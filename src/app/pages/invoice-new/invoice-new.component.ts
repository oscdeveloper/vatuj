import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-invoice-new',
  templateUrl: './invoice-new.component.html',
  styleUrls: ['./invoice-new.component.css']
})
export class InvoiceNewComponent implements OnInit {

  title: string = '';

  constructor(
    private configService: ConfigService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.title = this.configService.getAppTitle();
    this.titleService.setTitle( this.title );
  }

}
