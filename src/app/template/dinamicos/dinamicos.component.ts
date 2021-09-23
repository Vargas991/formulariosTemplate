import { Component, OnInit } from '@angular/core';


interface Persona {
  nombre: string;
  favoritos: Favorito[]; 
}
interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  nuevoJuego: string ='';
  persona: Persona={
    nombre: 'Edderson',
    favoritos: [
      {id: 1 , nombre: 'Metal Gear'},
      {id: 2 , nombre: 'Fifa22'},
      {id: 3 , nombre: 'Pubg'},
    ]
  }

  guardar(){
    console.log('Dinamicos Guardar');
  }

  borrar(index: number){
     this.persona.favoritos.splice(index,1);
  }

  agregar(){
      const nuevoFav: Favorito ={
        id: this.persona.favoritos.length+1, 
        nombre: this.nuevoJuego
      }
      if(this.nuevoJuego)
        this.persona.favoritos.push({...nuevoFav});

      this.nuevoJuego = '';
  }
}
