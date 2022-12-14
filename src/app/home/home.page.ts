import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "Resultado"
  precoAlcool: any;
  precoGasolina: any;

  calcular(){
    //Validar se os campos foram preenchidos
    if( this.precoAlcool && this.precoGasolina ){

      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

      // Faz cálculo resultado (PrecoAlcool / precoGasolina)
      // se: resultado >=0.7 melhor utilizar gasolina 
      // Senão: melhor utilizar álcool


      var res = pAlcool / pGasolina
      if( res >= 0.7){
        this.resultado = "Melhor utilizar Gasolina "
      }else{
        this.resultado = "Melhor utilizar Álcool"
      }

    }else{
        this.resultado = "Preencha corretamenta os campos"
    }
  }

}
