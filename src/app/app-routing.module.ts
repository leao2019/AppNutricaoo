import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'recuperacao-senha',
    loadChildren: () => import('./recuperacao-senha/recuperacao-senha.module').then( m => m.RecuperacaoSenhaPageModule)
  },
  {
    path: 'avaliar',
    loadChildren: () => import('./avaliar/avaliar.module').then( m => m.AvaliarPageModule)
  },
  {
    path: 'receitas',
    loadChildren: () => import('./receitas/receitas.module').then( m => m.ReceitasPageModule)
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./alimentos/alimentos.module').then( m => m.AlimentosPageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'carne',
    loadChildren: () => import('./carne/carne.module').then( m => m.CarnePageModule)
  },
  {
    path: 'receitaproteina',
    loadChildren: () => import('./receitaproteina/receitaproteina.module').then( m => m.ReceitaproteinaPageModule)
  },

  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'suplementos',
    loadChildren: () => import('./suplementos/suplementos.module').then( m => m.SuplementosPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'senha',
    loadChildren: () => import('./senha/senha.module').then( m => m.SenhaPageModule)
  },
  {
    path: 'treinos',
    loadChildren: () => import('./treinos/treinos.module').then( m => m.TreinosPageModule)
  },
  {
    path: 'treino2',
    loadChildren: () => import('./treino2/treino2.module').then( m => m.Treino2PageModule)
  },
  {
    path: 'treino3',
    loadChildren: () => import('./treino3/treino3.module').then( m => m.Treino3PageModule)
  },
  {
    path: 'treino4',
    loadChildren: () => import('./treino4/treino4.module').then( m => m.Treino4PageModule)
  },
  {
    path: 'treino5',
    loadChildren: () => import('./treino5/treino5.module').then( m => m.Treino5PageModule)
  },
  {
    path: 'fitness',
    loadChildren: () => import('./fitness/fitness.module').then( m => m.FitnessPageModule)
  },
  {
    path: 'hit',
    loadChildren: () => import('./hit/hit.module').then( m => m.HitPageModule)
  },
  {
    path: 'treino6',
    loadChildren: () => import('./treino6/treino6.module').then( m => m.Treino6PageModule)
  },
  {
    path: 'treino7',
    loadChildren: () => import('./treino7/treino7.module').then( m => m.Treino7PageModule)
  },
  {
    path: 'hit2',
    loadChildren: () => import('./hit2/hit2.module').then( m => m.Hit2PageModule)
  },
  {
    path: 'hit3',
    loadChildren: () => import('./hit3/hit3.module').then( m => m.Hit3PageModule)
  },
  {
    path: 'hit4',
    loadChildren: () => import('./hit4/hit4.module').then( m => m.Hit4PageModule)
  },
  {
    path: 'hit5',
    loadChildren: () => import('./hit5/hit5.module').then( m => m.Hit5PageModule)
  },
  {
    path: 'suplemento1',
    loadChildren: () => import('./suplemento1/suplemento1.module').then( m => m.Suplemento1PageModule)
  },
  {
    path: 'suplemento2',
    loadChildren: () => import('./suplemento2/suplemento2.module').then( m => m.Suplemento2PageModule)
  },
  {
    path: 'suplementos3',
    loadChildren: () => import('./suplementos3/suplementos3.module').then( m => m.Suplementos3PageModule)
  },
  {
    path: 'suplementos4',
    loadChildren: () => import('./suplementos4/suplementos4.module').then( m => m.Suplementos4PageModule)
  },
  {
    path: 'suplementos5',
    loadChildren: () => import('./suplementos5/suplementos5.module').then( m => m.Suplementos5PageModule)
  },
  {
    path: 'strong1',
    loadChildren: () => import('./strong1/strong1.module').then( m => m.Strong1PageModule)
  },
  {
    path: 'nutricionista',
    loadChildren: () => import('./nutricionista/nutricionista.module').then( m => m.NutricionistaPageModule)
  },
  {
    path: 'avaliarnutricionista',
    loadChildren: () => import('./avaliarnutricionista/avaliarnutricionista.module').then( m => m.AvaliarnutricionistaPageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  },
  {
    path: 'nutricionista1',
    loadChildren: () => import('./nutricionista1/nutricionista1.module').then( m => m.Nutricionista1PageModule)
  },
  {
    path: 'nutricionista2',
    loadChildren: () => import('./nutricionista2/nutricionista2.module').then( m => m.Nutricionista2PageModule)
  },
  {
    path: 'alimento1',
    loadChildren: () => import('./alimento1/alimento1.module').then( m => m.Alimento1PageModule)
  },
  {
    path: 'alimento2',
    loadChildren: () => import('./alimento2/alimento2.module').then( m => m.Alimento2PageModule)
  },
  {
    path: 'alimento3',
    loadChildren: () => import('./alimento3/alimento3.module').then( m => m.Alimento3PageModule)
  },
  {
    path: 'alimento4',
    loadChildren: () => import('./alimento4/alimento4.module').then( m => m.Alimento4PageModule)
  },
  {
    path: 'alimento5',
    loadChildren: () => import('./alimento5/alimento5.module').then( m => m.Alimento5PageModule)
  },
  {
    path: 'alimento6',
    loadChildren: () => import('./alimento6/alimento6.module').then( m => m.Alimento6PageModule)
  },
  {
    path: 'alimento7',
    loadChildren: () => import('./alimento7/alimento7.module').then( m => m.Alimento7PageModule)
  },
  {
    path: 'alimento8',
    loadChildren: () => import('./alimento8/alimento8.module').then( m => m.Alimento8PageModule)
  },
  {
    path: 'imc',
    loadChildren: () => import('./imc/imc.module').then( m => m.ImcPageModule)
  },
  {
    path: 'treino8',
    loadChildren: () => import('./treino8/treino8.module').then( m => m.Treino8PageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'segurancasenha',
    loadChildren: () => import('./segurancasenha/segurancasenha.module').then( m => m.SegurancasenhaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
