import { eAlertPersistence, eAlertType } from '../enums/AlertType.enum';

export class AlertModel {
  constructor(public Message: string = '', public Type: eAlertType = eAlertType.Error, public Persistence: eAlertPersistence = eAlertPersistence.OnPage) {
  }
}
