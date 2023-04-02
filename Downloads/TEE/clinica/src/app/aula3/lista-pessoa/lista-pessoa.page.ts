import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.page.html',
  styleUrls: ['./lista-pessoa.page.scss'],
})
export class ListaPessoaPage implements OnInit {

  lista: any = []
  //lista = [
  //  { nome: 'Ana Souza', idade: 19, genero: 'feminino' },
  //  { nome: 'Bia Bia', idade: 34, genero: 'feminino' },
  //  { nome: 'Claudinha Laa', idade: 49, genero: 'feminino' },
  //  { nome: 'Rapunzel Curta', idade: 67, genero: 'feminino' },
  //  { nome: 'Chapauzinho Verde', idade: 99, genero: 'feminino' }
  //]


  constructor(
    private nav: NavController
  ) { }

  ngOnInit() {

  }



  ionViewWillEnter() {
    const aux: any = localStorage.getItem('pacientes')
    this.lista = JSON.parse(aux)
    this.lista.sort((a: any, b:any) => this.sortString(a.nome, b.nome));
    console.log('lista.pacientes')
  }



  exibeCadastro() {
    localStorage.setItem('pessoa', 'criar');
    this.nav.navigateForward('form-cadastro-pessoa');
  }




  sortString (a: string, b: string){
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }

  detalhe(item: any){
    const aux = JSON.stringify(item);
    localStorage.setItem('pessoa', aux);
    console.log(item);
    console.log('origem');
    this.nav.navigateForward('detalhe-pessoa');

  }

  editar(item:any){
    const aux = JSON.stringify(item);
    localStorage.setItem('pessoa', aux);
    this.nav.navigateForward('form-cadastro-pessoa');


  }

  deletar(item:any){
    this.lista = this.lista.filter((el:any) => el  != item)
    localStorage.setItem('pacientes', JSON.stringify(this.lista))

  }

}