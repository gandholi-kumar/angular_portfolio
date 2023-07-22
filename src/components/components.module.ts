import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContainerComponent } from './table-container/table-container.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table-container/table/table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableContainerComponent, HomeComponent, TableComponent],
  exports: [TableContainerComponent, HomeComponent, TableComponent],
})
export class ComponentsModule {}
