import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContainerComponent } from './table-container/table-container.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table-container/table/table.component';
import { MedicalService } from './table-container/service/medical.service';
import { SearchTextComponent } from './search-text/search-text.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    TableContainerComponent,
    HomeComponent,
    TableComponent,
    SearchTextComponent,
  ],
  exports: [
    TableContainerComponent,
    HomeComponent,
    TableComponent,
    SearchTextComponent,
  ],
  providers: [MedicalService],
})
export class ComponentsModule {}
