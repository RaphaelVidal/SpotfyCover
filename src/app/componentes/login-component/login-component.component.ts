import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const email = event.target.querySelector('#InputEmail').value
    const senha = event.target.querySelector('#InputPassword').value
    console.log(email);
    console.log(senha);
    this.Auth.obterDadosLogin(email,senha) // chamar função em Auth
  }

}
