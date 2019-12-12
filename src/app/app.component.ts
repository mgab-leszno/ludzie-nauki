import { Component } from '@angular/core';
import { DataLoaderService } from './services/data-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = true;
  title = 'science-figures';

  constructor(public dataLoader: DataLoaderService) { }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
