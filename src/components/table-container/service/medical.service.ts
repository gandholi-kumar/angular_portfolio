import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMedicalHistory } from '../../models';
import { medicalHistoryData } from '../../utils';

@Injectable()
export class MedicalService {
  medicalHistoryBehaviorSubject$ = new BehaviorSubject<IMedicalHistory[]>(
    medicalHistoryData
  );

  constructor() {}

  public getMedicalData(): Observable<IMedicalHistory[]> {
    return this.medicalHistoryBehaviorSubject$;
  }
}
