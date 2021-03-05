import { Component } from "@angular/core";

@Component({
    selector : 'app-heroe',
    templateUrl : './heroe.component.html'
})

export class HeroeComponent{

nombre : String = "iron man";
edad :number = 45;

obtenerNombre():string{

    return `${this.nombre} , ${this.edad}`
}

get nombreCapitalizado() : String{
    return this.nombre.toUpperCase();
}

cambiarNombre() : void{
    this.nombre = 'spiderman';
}

cambiarEdad() : void {
    this.edad  = 22;
}

}