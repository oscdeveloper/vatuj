import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ConfigService } from './services/config.service';
import { MdDialog } from '@angular/material';
import { DialogAboutComponent } from './dialogs/dialog-about/dialog-about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title: any = {};

  constructor(
    private configService: ConfigService,
    public dialog: MdDialog
  ) {
    configService.changeTitleSource$.subscribe(
      title => {
        this.title = title;
      });
  }

  openDialog() {
    this.dialog.open(DialogAboutComponent);
  }

  ngOnInit() {
    this.title = this.configService.getTitle();
  }
    

}