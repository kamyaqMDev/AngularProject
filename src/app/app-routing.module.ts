import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserMailingListFormComponent } from './user-mailing-list-form/user-mailing-list-form.component';

const routes: Routes = [
  // ... other routes
  { path: 'user-mailing-list-form', component: UserMailingListFormComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

