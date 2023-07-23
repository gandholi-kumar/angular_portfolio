import { Component, Input, OnInit } from '@angular/core';
import { IColumnDefinition, IMedicalHistory } from '../../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableTitle!: string;
  @Input() data!: IMedicalHistory[];
  @Input() tableColDef!: IColumnDefinition[];

  constructor() {}

  ngOnInit() {
    console.log('Data: ', this.data);
  }
}
