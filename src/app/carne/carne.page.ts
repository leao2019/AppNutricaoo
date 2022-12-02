import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { ToastController} from '@ionic/angular'

@Component({
  selector: 'app-carne',
  templateUrl: './carne.page.html',
  styleUrls: ['./carne.page.scss'],
})
export class CarnePage implements OnInit {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async exibirAlertaFavorito(){
    const alert = await this.alertController.create({
     header: 'Alerta',
     message: 'Alimento adicionado aos favoritos',
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
    message: 'Alimentos adicionados aos favoritos',
    duration: 2000,
    color: 'success'
  });
  toast.present();
 }
 

  ngOnInit() {
  }

}
