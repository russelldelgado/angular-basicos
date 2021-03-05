import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes:string[] = ['spiderman' , 'ironman' , 'thor','hulk','capitan america'];
  heroeBorrado :String = '';
  expresion :boolean = false;

  borrarHeroe(){
    console.log("borrando heroe");
    this.expresion = true;
   this.heroeBorrado = this.heroes.shift();
  }

}
