import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from "rxjs";


@Component({
  selector: 'page-agendar-alimentos',
  templateUrl: 'agendar-alimentos.html'
})
export class AgendarAlimentosPage {
  items: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public angularFD: AngularFireDatabase) {
    this.angularFD.object(`pedidos/frutas/`).set(
      { "Pedidos": { "Pedido-Barbara":
        { "nome": "Barbara", "frutas": "laranja,morango, surpresa", "massagem": "9:00" },
          "Pedido-Marlon": { "nome": "Marlon", "frutas": "laranja,morango, surpresa", "massagem": "10:00" } } } )


    // var usersRef = this.angularFD.child("users");

    angularFD.list('list')

  }


}

