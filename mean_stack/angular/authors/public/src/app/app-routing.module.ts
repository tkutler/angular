import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  { path: 'edit/:id',component: EditComponent },
  { path: 'new',component: NewComponent },
  { path: 'all',component: AllComponent },
  { path: '', pathMatch: 'full', redirectTo: '/all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
