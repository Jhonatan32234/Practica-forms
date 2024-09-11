import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { isScheduler } from 'rxjs/internal/util/isScheduler';
import { IUser } from '../modelo/iuser';
@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent {
  user_list: IUser[] = [];

  constructor(private _service:UserService){
  }

  ngOnInit() {
    this._service.getAll().subscribe(
      data => this.user_list = data,   // Asignar los datos obtenidos a la variable user_list
      error => console.error(error)    // Manejar los errores en caso de que ocurran
    );
  }
  
}
