import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { MainComponent } from './main/main.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'entries', component: EntryListComponent },
  { path: 'person/:id', component: PersonComponent },
  { path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
