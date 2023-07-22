import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableContainerComponent } from './table-container/table-container.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableContainerComponent, HomeComponent],
  exports: [TableContainerComponent, HomeComponent],
})
export class ComponentsModule {}
