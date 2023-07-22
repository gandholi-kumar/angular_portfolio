import { Component, Input, OnInit } from '@angular/core';
import { IMedicalHistory } from '../../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() tableTitle!: string;
  @Input() data!: IMedicalHistory[];

  constructor() {}

  ngOnInit() {
    console.log('Data: ', this.data);
  }
}
