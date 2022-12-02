import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/receitas', icon: 'home' },
    { title: 'Plano nutricional', url: '/nutricionista', icon: 'restaurant' },
    { title: 'Favorites', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Fitness', url: '/fitness', icon: 'barbell' },
    { title: 'Calendário', url: '/calendario', icon: 'calendar-number'},
    { title: 'Configurações', url: '/configuracoes', icon: 'settings' },
    { title: 'Sair', url: '/login', icon: 'power' },
  ];
  
  //public labels = ['Avaliação', 'Perfil de usuário', 'Notes', 'Work', 'Travel', 'Reminders'];
  //constructor() {}
}
