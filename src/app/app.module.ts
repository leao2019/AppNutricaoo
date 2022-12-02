import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './../environments/environment';
import { AlertController, IonicModule, IonicRouteStrategy, ToastController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFirestoreModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async exibirAlertaFavorito(){
    const alert = await this.alertController.create({
     header: 'Alerta',
     message: 'Deseja realmente sair?',
     buttons:[
      {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) =>{
           console.log('Confirma Cancel: blah')
}
},{
text: 'Sim',
handler: () => {
this.apresentarToast();
}
}
]
});
await alert.present();
}

async apresentarToast(){
  const toast = await this.toastController.create({
    message: 'Sessão encerrada',
    duration: 2000,
    color: 'danger'
  });
  toast.present();
 }
 

  ngOnInit() {
  }

}




