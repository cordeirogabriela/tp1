import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {
  public procedimento: string = '';


  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  back(){
    this.nav.navigateBack('welcome');
  }

  agendar(){
    alert('Agendamento concluído.')
    this.nav.navigateBack('welcome');

  }


  procedimentos: string[] = [
    'Massagem terapêutica',
    'Terapia por ondas de choque',
    'Acupuntura',
    'Eletroterapia',
    'Hidroterapia',
    'Fisioterapia respiratória',
    'Exercícios terapêuticos',
    'Tratamento de feridas e lesões cutâneas',
    'Tratamento de problemas ortopédicos',
    'Tratamento de problemas neurológicos',
    'Tratamento pré e pós-operatório',
    'Postura e ergonomia'
  ]
  footer = "Designed by Gabriela Cordeiro - GU3015084"
}
