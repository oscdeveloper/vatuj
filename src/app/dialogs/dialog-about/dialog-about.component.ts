import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-dialog-about',
  templateUrl: './dialog-about.component.html'
})
export class DialogAboutComponent implements OnInit {

  appConfig: any;
  currentYear: number;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.appConfig = this.configService.getAppConfig();
    this.currentYear =  this.configService.getCurrentYear();
  }

}
