import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.page.html',
  styleUrls: ['./suplementos.page.scss'],
})
export class SuplementosPage implements OnInit {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async exibirAlertaFavorito(){
    const alert = await this.alertController.create({
     header: 'Alerta',
     message: 'Deseja realmente favoritar este alimento?',
     buttons:[
      {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) =>{
           console.log('Confirma Cancel: blah')
}
},{
text: 'Sim, favoritar',
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
    message: 'Suplemento adicionado aos favoritos',
    duration: 2000,
    color: 'primary'
  });
  toast.present();
 }
 

  ngOnInit() {
  }

}
