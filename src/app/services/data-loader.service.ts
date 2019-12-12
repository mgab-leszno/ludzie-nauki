import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService implements OnDestroy {
  private $dataLoad: Subscription;

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
      return this.http.get('../../assets/figures.json');
  }

  ngOnDestroy(): void {
    this.$dataLoad.unsubscribe();
  }
}
