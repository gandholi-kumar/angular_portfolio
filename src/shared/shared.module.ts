import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, NavComponent, ContentComponent],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ContentComponent,
  ],
})
export class SharedModule {}
