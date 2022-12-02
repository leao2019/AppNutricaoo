import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { User } from './../interface/user';
import { ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private AuthService: AuthService,
    private router: Router

    ) { }
  ngOnInit() {
  }
  async register(){
    await this.presentLoading();

    try{
  await this.AuthService.register(this.userRegister);
  } catch(error){
      let message: string;

      switch(error.code){
        case 'auth/email-already-in-use':
          message = 'E-mail sendo usado';
          break;

        case 'auth/invalid-email':
          message = 'E-mail inválido';
          break;
  }
  this.presentToast(message);

} finally{
    this.loading.dismiss();
  }
}
async presentLoading() {
  this. loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde..'    });
  return this.loading.present();

}
async presentToast(message: string){
  const toast = await this.toastCtrl.create({ message,  duration: 3000});
  toast.present();
}
}

