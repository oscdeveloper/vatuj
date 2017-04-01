import { Injectable } from '@angular/core';
import { Title }      from '@angular/platform-browser';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ConfigService {

  private changeTitleSource = new Subject<string>();
  changeTitleSource$ = this.changeTitleSource.asObservable();

  private config: any = {
    app: {
      title: 'Vatuj.pl',
      currentPageTitle: '',
      author: 'Arkadiusz Krakiewicz',
      url: 'http://www.oscdeveloper.pl',
      www: 'oscDeveloper.pl',
    }
  };

  constructor(
    private titleService: Title
  ) { }

  getAppConfig(): string {
    return this.config.app;
  }

  getCurrentYear(): number {
    return (new Date).getFullYear();
  }

  setPageTitle(title: string): void {
    this.config.app.currentPageTitle = title;
    this.titleService.setTitle(this.config.app.title + ' - ' + this.config.app.currentPageTitle);
    this.announceChangeTitle(this.config.app.currentPageTitle);
  }

  announceChangeTitle(title: any) {
    this.changeTitleSource.next(title);
  }  

}
