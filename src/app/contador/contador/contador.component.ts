import { Component } from "@angular/core";

@Component({
    selector : 'app-contador',
    template : `
    <h1>{{ titulo }}</h1>

    <h1>LA BASE ES <span>{{base}}</span></h1>

    <button (click)="acumular(base)"  >+{{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumular(-base)"  >-{{base}}</button>
    
    `
})

export class contadorComponent{
    public titulo : string = 'bases';
    public contador:string  ='CONTADOR DE MI APP'
    numero : number = 10;
    base : number = 5;
  
    sumar(){
      this.numero+=1;
    }
    restar(){
      this.numero-=1
    }
    acumular(valor :number){
      this.numero += valor
    }
  
  
}