import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-dialog-about',
  templateUrl: './dialog-about.component.html'
})
export class DialogAboutComponent implements OnInit {

  title: string = '';
  year: number = null;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.title = this.configService.getAppTitle();
    this.year =  (new Date).getFullYear();
  }

}
