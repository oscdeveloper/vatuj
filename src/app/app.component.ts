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

  title: string = '';

  constructor(
    private configService: ConfigService,
    private titleService: Title,
    public dialog: MdDialog
  ) {}

  openDialog() {
    this.dialog.open(DialogAboutComponent);
  }

  ngOnInit() {
    this.title = this.configService.getAppTitle();
    this.titleService.setTitle( this.title );
  }
    

}