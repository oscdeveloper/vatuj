import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Title }      from '@angular/platform-browser';

@Injectable()
export class ConfigService {

  private changeTitleSource = new Subject<string>();
  changeTitleSource$ = this.changeTitleSource.asObservable();

  private config: any = {
    title: {
      app: 'Vatuj.pl',
      page: ''
    }
  };

  constructor(
    private titleService: Title
  ) { }

  getTitle(): string {
    return this.config.title;
  }

  setPageTitle(title: string): string {
    this.config.title.page = title;
    this.titleService.setTitle(this.config.title.app + ' - ' + this.config.title.page);
    this.announceChangeTitle(this.config.title);
    return this.config.title;
  }

  announceChangeTitle(title: any) {
    this.changeTitleSource.next(title);
  }  

}
