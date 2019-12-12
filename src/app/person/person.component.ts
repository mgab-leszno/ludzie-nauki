import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataLoaderService } from '../services/data-loader.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnDestroy {
  $dataSub: Subscription;
  person: any;
  isLoaded = false;

  constructor(
      public dataLoader: DataLoaderService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.$dataSub = this.dataLoader.getJSON().subscribe((data: any) => {
      this.isLoaded = !(!data);
      this.person = data.entries[+id];
      console.log(this.person);
    });
  }

  ngOnDestroy(): void {
    if (this.$dataSub && !this.$dataSub.closed) {
      this.$dataSub.unsubscribe();
    }
  }
}
