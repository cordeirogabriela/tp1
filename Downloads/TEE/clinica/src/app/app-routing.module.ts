import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./a2/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./a2/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'form-cadastro-pessoa',
    loadChildren: () => import('./aula3/form-cadastro-pessoa/form-cadastro-pessoa.module').then( m => m.FormCadastroPessoaPageModule)
  },
  {
    path: 'lista-pessoa',
    loadChildren: () => import('./aula3/lista-pessoa/lista-pessoa.module').then( m => m.ListaPessoaPageModule)
  },
  {
    path: 'detalhe-pessoa',
    loadChildren: () => import('./aula3/detalhe-pessoa/detalhe-pessoa.module').then( m => m.DetalhePessoaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
