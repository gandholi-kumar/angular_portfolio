import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMedicalHistory } from '../models';
import { MedicalService } from './service/medical.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css'],
})
export class TableContainerComponent implements OnInit {
  medicalData$!: Observable<IMedicalHistory[]>;

  constructor(private medicalService: MedicalService) {}

  ngOnInit() {
    this.medicalData$ = this.medicalService.getMedicalData();
  }
}
