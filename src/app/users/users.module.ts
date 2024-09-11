import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserTableComponent } from './user-table/user-table.component';



@NgModule({
  declarations: [
    UsersDashboardComponent,
    UserFormComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
   FormsModule
  ],
  exports:[
    UserFormComponent,
    UsersDashboardComponent,
    UserTableComponent

  ]
})
export class UsersModule {}
