import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { ToastController} from '@ionic/angular'
@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.page.html',
  styleUrls: ['./alimentos.page.scss'],
})
export class AlimentosPage implements OnInit {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async exibirAlertaFavorito(){
    const alert = await this.alertController.create({
     header: 'Alerta',
     message: 'Deseja realmente favoritar o filme?',
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
