import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  obterDadosLogin(email, senha) {
    if (email == "raphael.r.vidal@gmail.com" && senha == 123456) {
      window.location.href = "/home";
    }else{
      // alert('Erro: Verifique os dados')
      Swal.fire({
        icon: 'error',
        title: 'Autenticação Inválida',
        text: 'Verifique as dados inseridos!'
      })
    }

  }

}
