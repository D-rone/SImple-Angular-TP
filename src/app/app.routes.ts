import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
  },
  {
    path: 'addUser',
    component: AddUserComponent,
  },
  {
    path: 'updateUser/:id',
    component: UpdateUserComponent,
  },
];
