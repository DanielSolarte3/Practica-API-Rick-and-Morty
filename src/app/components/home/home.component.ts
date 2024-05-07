import { Component, OnInit } from '@angular/core';
import { Character } from '../../../models/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  characters: Character[]= [];

  constructor(){

  }

  ngOnInit(): void {
    this.listCharacters('/');
  }

  listCharacters(page:string){
    fetch(`https://rickandmortyapi.com/api/character${page}`).then(
      (res)=>res.json()
    ).then(
      (json)=>{
        const auxCharacters: Character[]=json.results;
        for(let i=0;i<auxCharacters.length;i++){
          this.characters.push(auxCharacters[i]);
        }
      }
    )
  }
}
