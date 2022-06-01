import { Injectable } from '@angular/core';
import * as objectPath from 'object-path';
import { DefaultConfig } from '../configs/default.config';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
     getProp(path: string): any {
     return objectPath.get(DefaultConfig, path);
   }
}
