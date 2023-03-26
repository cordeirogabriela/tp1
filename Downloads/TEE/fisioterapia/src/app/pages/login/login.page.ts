import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(private nav: NavController) { 
    console.log('LoginPage initialized');
  }

  ngOnInit() {
  }

  footer = "Designed by Gabriela Cordeiro - GU3015084"

  login(email:string, senha:string){
    console.log('login() called');
    console.log('User:', email);
    console.log('Senha:',senha);
  }

  back(){
    this.nav.navigateBack('welcome');
  }


}
