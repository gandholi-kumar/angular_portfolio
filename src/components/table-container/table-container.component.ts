import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMedicalHistory } from '../models';
import { IColumnDefinition } from '../models/medicalHistoryData.model';
import { medicalHistoryColumnDefinition } from '../utils/medical_history_data';
import { MedicalService } from './service/medical.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent implements OnInit {
  medicalData$!: Observable<IMedicalHistory[]>;
  tableConfig: IColumnDefinition[] = medicalHistoryColumnDefinition;
  searchTerm!: string;

  constructor(private medicalService: MedicalService) {}

  ngOnInit() {
    this.medicalData$ = this.medicalService.getMedicalData();
    console.log(this.tableConfig);
  }

  onSearch(searchText: string) {
    this.searchTerm = String(searchText).toString();
  }
}
