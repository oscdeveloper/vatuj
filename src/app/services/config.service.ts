import { Injectable } from '@angular/core';
import { Title }      from '@angular/platform-browser';

@Injectable()
export class ConfigService {

  title: string = 'Vatuj.pl'; 

  constructor(
    private titleService: Title
  ) { }

  getAppTitle(): string {
    return this.title;
  }

  setAppTitle(title: string): string {
    title = this.title + ' - ' + title;
    this.titleService.setTitle( title );
    return title;
  }

}
