import { Component } from '@angular/core';
import { MyClass } from '../classes/my-class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  alumno : MyClass = new MyClass(
    "233421",
    "Jhonatan",
    "Zuñiga",
    "adgaga99a9a9",
    "6262613417431",
    "4643134714",
    "dshshs@dagaga.afsa"
  )

  edad = 18
  number = 6
  lista_alumnos : MyClass[] = [this.alumno]

  nombre: string = this.alumno.nombre

  mostrar (): void {
    console.log(this.alumno);
    

  }

  actualizar () : void {


  }

  guardar () : void{

  }

  disabled : boolean = true
  
  
}
