import { Component, ViewChild } from '@angular/core';
import { UserTableComponent } from './users/user-table/user-table.component';
import { IUser } from './users/modelo/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(UserTableComponent) userTableComponent!:UserTableComponent;

  onUsuarioCreado(nuevoUsuario:IUser): void{
    this.userTableComponent.agregarUsuario(nuevoUsuario);
  }

}


