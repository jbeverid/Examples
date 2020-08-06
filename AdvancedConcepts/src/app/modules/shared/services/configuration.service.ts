import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigurationModel } from '../models/Configuration.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private Configuration: BehaviorSubject<ConfigurationModel> = new BehaviorSubject<ConfigurationModel>(new ConfigurationModel());
  constructor() { }

  public SetConfig(psName: string, value: any) {
    const toCurrConfig = this.Configuration.getValue();
    if (toCurrConfig.hasOwnProperty(psName)) {
      toCurrConfig[psName] = value;
    }
    this.Configuration.next(toCurrConfig);
  }

  public GetConfig(): Observable<ConfigurationModel> {
    return this.Configuration.asObservable();
  }
}
