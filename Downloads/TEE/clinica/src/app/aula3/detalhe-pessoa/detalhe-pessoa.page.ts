import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-pessoa',
  templateUrl: './detalhe-pessoa.page.html',
  styleUrls: ['./detalhe-pessoa.page.scss'],
})
export class DetalhePessoaPage implements OnInit {

  pessoa = {nome: '', idade: 0, genero: ''}


  constructor() { }

  //é executado só na primeira vez que a pagina é instanciada
  ngOnInit() {
  }

  //é executado todas as vezes que a tela for exibida
  ionViewWillEnter(){
    const aux: any = localStorage.getItem('pessoa');
    this.pessoa = JSON.parse(aux);
    console.log('destino');
    
    console.log(this.pessoa);
  }

}
