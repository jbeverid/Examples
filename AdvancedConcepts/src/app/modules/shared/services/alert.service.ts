import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertModel } from '../models/Alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public Message: Subject<AlertModel> = new Subject<AlertModel>();
  constructor() { }

  public Create(poModel: AlertModel): void {
    this.Message.next(poModel);
  }

  public Clear(): void {
    this.Message.next(null);
  }

  public GetAlert(): Observable<AlertModel> {
    return this.Message.asObservable();
  }
}
