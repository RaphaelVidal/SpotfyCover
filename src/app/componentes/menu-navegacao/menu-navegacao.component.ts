import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-navegacao',
  templateUrl: './menu-navegacao.component.html',
  styleUrls: ['./menu-navegacao.component.css']
})
export class MenuNavegacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setActive(idlink:string){
    const linkAtivo = document.getElementsByClassName('active') 
    document.getElementById(linkAtivo[0].id).classList.remove('active')
    document.getElementById(idlink).classList.add('active')
  }

}
