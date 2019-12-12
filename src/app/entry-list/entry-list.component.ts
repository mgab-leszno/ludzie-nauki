import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLoaderService } from '../services/data-loader.service.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit, OnDestroy {
  $dataSub: Subscription;
  data: any;
  isLoaded = false;

  constructor(public dataLoader: DataLoaderService) { }

  ngOnInit(): void {
    this.$dataSub = this.dataLoader.getJSON().subscribe((data: any) => {
      this.isLoaded = !(!data);
      this.data = data.entries;
    });
  }

  ngOnDestroy(): void {
    if (this.$dataSub && !this.$dataSub.closed) {
      this.$dataSub.unsubscribe();
    }
  }
}
