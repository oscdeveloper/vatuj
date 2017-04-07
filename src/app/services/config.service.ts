import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Title }      from '@angular/platform-browser';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigService {

  private changeTitleSource = new Subject<string>();
  changeTitleSource$ = this.changeTitleSource.asObservable();

  private config: any = {};

  constructor(
    private http: Http,
    private titleService: Title
  ) { }
  
  init(): Promise<boolean> {
    return new Promise((resolve) => {
      this.loadConfig().subscribe(
        config => {
          this.setConfig(config);
          resolve(true);
        }
      );
    });
  }

  loadConfig(): Observable<any> {
    return this.http.get('config-file.json').map(
      (res:Response) => res.json()
    ).catch(
      (error:any) => Observable.throw(error.json().error || 'Server error')
    );
  }

  setConfig(config: any): any {
    this.config = config;
    return this;
  }  

  getAppConfig(): string {
    return this.config.app;
  }

  getSellerInfo(): string {
    return this.config.seller;
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
