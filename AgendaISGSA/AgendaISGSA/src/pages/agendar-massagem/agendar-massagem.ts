import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
  selector: 'page-agendar-massagem',
  templateUrl: 'agendar-massagem.html'
})
export class AgendarMassagemPage {
  User: any = {};

  constructor(public navCtrl: NavController,
              public angularFD: AngularFireDatabase,
              public alertCtrl: AlertController) {

    this.User = localStorage.getItem("User");
    console.log(this.User);

  }

  agendarMassagem(num) {

    let alert = this.alertCtrl.create({
      title: 'Confirmar',
      message: 'Confirmar a massagem ' + num,
      buttons: [
        {
          text: 'confirmar',
          role: 'confirm',
          handler: () => {
            this.User = localStorage.getItem('User')
            this.angularFD.object(`Pedidos/`).set(
              {
                "Pedidos": {
                  'Barbara':
                    {"nome": "Barbara", "frutas": "laranja,morango, surpresa", "massagem": "9:00"},
                }
              })
            console.log("cliquei");
            console.log(num);

            console.log('Cancel clicked');
          }}]
        });
    alert.present();


}}
