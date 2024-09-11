import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../modelo/iuser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls:[ './user-form.component.css']
})
export class UserFormComponent {

  user:IUser = {
    id:0,
    name:"",
    username:"",
    phone:"",
    website:""
  }

  @Output() userAdded = new EventEmitter<IUser>();
  mostrar():void {
    this.userAdded.emit(this.user)
    this.user = { id: 0, name: "", username: "", phone: "", website: "" };
  }
}
