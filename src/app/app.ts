import { Component } from '@angular/core';
import {SideNavComponent} from './section/shared/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  imports: [SideNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'digital-aprendizaje-web';
}
