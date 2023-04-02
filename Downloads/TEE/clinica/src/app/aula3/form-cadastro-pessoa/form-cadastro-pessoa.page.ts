import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-cadastro-pessoa',
  templateUrl: './form-cadastro-pessoa.page.html',
  styleUrls: ['./form-cadastro-pessoa.page.scss'],
})
export class FormCadastroPessoaPage implements OnInit {
  nome = ''
  idade = ''
  genero = ''
  label = 'Enviar'
  lista = []


  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {
    let aux: any = localStorage.getItem('pacientes')
    this.lista = aux ? JSON.parse(aux) : []

    const modo:any = localStorage.getItem('pessoa')
    if( modo != 'criar'){
      let pessoa = JSON.parse(modo)
      this.nome = pessoa.nome
      this.genero = pessoa.genero
      this.idade = pessoa.idade
      this.label = 'Editar'

    }


    console.log('formulario')
  }

  save() {
    const nome = this.nome
    const idade = this.idade
    const genero = this.genero
    const obj: any = { nome, idade, genero }

    if(this.label == 'Criar'){
      this.lista.concat(obj)
    } else{
      this.lista.forEach((item,k) =>{
        if (item == obj){
          console.log('achou')
          //this.lista.splice(k, 1, replace)
        }
      })
    }


    const data = JSON.stringify(this.lista)
    localStorage.setItem('pacientes', data)
    this.nav.navigateBack('lista-pessoa');
  }



}
