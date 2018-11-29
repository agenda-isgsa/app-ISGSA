import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from "rxjs";


@Component({
  selector: 'page-agendar-alimentos',
  templateUrl: 'agendar-alimentos.html'
})
export class AgendarAlimentosPage {
  items: Observable<any[]>;

  post: any = [];
  laranja: any;

  visible: boolean;
  constructor(public navCtrl: NavController,
              public angularFD: AngularFireDatabase,
              public alertCtrl: AlertController) {
    this.angularFD.object(`pedidos/frutas/`).set(
      {
        "Pedidos": {
          "Pedido-Barbara":
            {"nome": "Barbara", "frutas": "laranja,morango, surpresa", "massagem": "9:00"},
          "Pedido-Marlon": {"nome": "Marlon", "frutas": "laranja,morango, surpresa", "massagem": "10:00"}
        }
      })


    // var usersRef = this.angularFD.child("users");

    angularFD.list('list')
    this.visible = false;
  }

fruta(post){
    this.post = post;
    console.log(this.post)
}


  agendarAlimentos(fruta) {

    let alert = this.alertCtrl.create({
      title: 'Confirmar',
      message: 'Confirmar a massagem ' + fruta,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {

            let name = localStorage.getItem('User');
            this.angularFD.object(`Pedidos/` + name).update(
              {"nome": name, "fruta": fruta}
            )
            console.log("cliquei");
            console.log(fruta);

            console.log('Confirm clicked');
          }
        },

      ]
    });
    alert.present();

  }
}

