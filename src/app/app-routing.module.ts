import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {EmailFormComponent } from './email-form/email-form.component';
import {ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
    { path: 'formen', component: EmailFormComponent },
    { path: 'forwomen', component: ContactComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
