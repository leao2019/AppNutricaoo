import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  //Variaveis globais
  peso: string;
  altura: string;
  resultado: string;

  constructor() { }

  Calcular(){
    //Variaveis locais
    let p = parseFloat(this.peso);
    let a = parseFloat(this.altura);

    let imc = p / (a * a);

    let result;
     
     if (imc < 18.5){
      result = "Abaixo do peso";
     }else if (imc < 25){
      result = "Peso normal";
     }else{
      result = "Acima do peso";
     }
        this.resultado = result
  }

  ngOnInit() {
  }

}
