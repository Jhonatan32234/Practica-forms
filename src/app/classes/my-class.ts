import { MyInterface } from "../interfaces/my-interface";


export class MyClass implements MyInterface{

    matricula: string
    nombre: string
    apellidos : string
    curp: string
    nss:string
    correo_personal: string
    correo_institucional: string

    constructor (
        matricula: string,
        nombre: string,
        apellidos : string,
        curp: string,
        nss:string,
        correo_personal: string,
        correo_institucional: string)
        
        {
        this.matricula = matricula;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curp = curp;
        this.nss = nss;
        this.correo_personal = correo_personal;
        this.correo_institucional = correo_institucional;
    }
    inscribirse(): void {
        throw new Error("Method not implemented.");
    }


    
}
