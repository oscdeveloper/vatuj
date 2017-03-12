import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  title: string = 'Test Appxxx'; 

  constructor() { }

  getAppTitle(): string {
    return this.title;
  }

}
