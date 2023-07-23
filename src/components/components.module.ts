import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContainerComponent } from './table-container/table-container.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table-container/table/table.component';
import { MedicalService } from './table-container/service/medical.service';
import { SearchTextComponent } from './search-text/search-text.component';
import { FormsModule } from '@angular/forms';
import { TableFilterPipe } from './pipes/table-filter.pipe';
import { HistoryGridComponent } from './history-grid/history-grid.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    TableContainerComponent,
    HomeComponent,
    TableComponent,
    SearchTextComponent,
    TableComponent,
    TableFilterPipe,
    HistoryGridComponent
  ],
  exports: [
    TableContainerComponent,
    HomeComponent,
    TableComponent,
    SearchTextComponent,
    TableComponent,
    TableFilterPipe,
    HistoryGridComponent
  ],
  providers: [MedicalService],
})
export class ComponentsModule {}
