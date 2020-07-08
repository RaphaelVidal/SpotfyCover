import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  
  obterDadosLogin(email,senha){
    window.location.href = "/home";
  }

}
