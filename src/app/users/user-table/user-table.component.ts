import { Component } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  users:IUser[] = [];

  agregarUsuario(nuevoUsuario:IUser): void{
    this.users.push(nuevoUsuario)
  }

}
