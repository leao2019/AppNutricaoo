import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { User } from './../interface/user';
import {  ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
  async login(){
    await this.presentLoading();

    try{
      await this.AuthService.login(this.userLogin);

      this.router.navigate(['/receitas']);
    } catch(error){
      this.presentToast(error.message);
    } finally {
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


