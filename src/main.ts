import 'zone.js/dist/zone';
import {
  Component,
  importProvidersFrom,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule, ComponentsModule],
  templateUrl: './main.html',
})
export class App {
  title = 'My World';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(RouterModule.forRoot(APP_ROUTES))],
});
