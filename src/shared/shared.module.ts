import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { TableContainerComponent } from './table-container/table-container.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    TableContainerComponent,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
    TableContainerComponent,
  ],
})
export class SharedModule {}
