import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage,  } from '@ionic/storage';


/*
  Generated class for the Caractere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-caractere',
  templateUrl: 'caractere.html'
})
export class CaracterePage {
    

          moods:any[] = ([

            {id: 1, nom: 'gentillesse', lower:0, upper:10},
            {id: 1, nom: 'Amoureux'   , lower:0, upper:10},
            {id: 1, nom: 'Joueur'     , lower:0, upper:10},
            {id: 1, nom: 'Cafardeux'  , lower:0, upper:10},
            {id: 1, nom: 'Bavard'     , lower:0, upper:10},
            {id: 1, nom: 'Creatif'    , lower:0, upper:10},
            {id: 1, nom: 'Caracteriel', lower:0, upper:10},
            {id: 1, nom: 'Faineant'   , lower:0, upper:10},
            {id: 1, nom: 'Insolent'   , lower:0, upper:10}
   
          ])

           private gentillesse: {lower:0, upper:10};
           private Amoureux: {lower:0, upper:10};
           private Joueur: {lower:0, upper:10};
           private Cafardeux: {lower:0, upper:10};
           private Bavard: {lower:0, upper:10};
           private Creatif: {lower:0, upper:10} ;
           private Caracteriel: {lower:0, upper:10};
           private Faineant: {lower:0, upper:10};
           private Insolent: {lower:0, upper:10};

            
         /* private mood = [
            {gentillesse: {}},
            {Amoureux: {}},
            {Joueur: {}},
            {Cafardeux: {}},
            {Bavard: {}},
            {Creatif: {}}, 
            {Caracteriel: {}},
            {Faineant: {}},
            {Insolent: {}},
          ];*/
          
          /*if(mood[1] = undefined ){
            this.mood = [
            {gentillesse: {lower:0, upper:100 }},
            {Amoureux: {lower:0, upper:100 }},
            {Joueur: {lower:0, upper:100 }},
            {Cafardeux: {lower:0, upper:100 }},
            {Bavard: {lower:0, upper:100 }},
            {Creatif: {lower:0, upper:100 }}, 
            {Caracteriel: {lower:0, upper:100 }},
            {Faineant: {lower:0, upper:100 }},
            {Insolent: {lower:0, upper:100 }},
         

          };*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
      
       this.storage.get('moods').then((data) => {
       console.log(data);
       this.moods =data;
     });

      this.storage.get('gentillesse').then((data) => {
       console.log(data);
       this.gentillesse =data;
     });

      this.storage.get('Amoureux').then((data) => {
       console.log(data);
       this.Amoureux =data;
     });

      this.storage.get('Joueur').then((data) => {
       console.log(data);
       this.Joueur =data;
     });

      this.storage.get('Cafardeux').then((data) => {
       console.log(data);
       this.Cafardeux =data;
     });

      this.storage.get('Bavard').then((data) => {
       console.log(data);
       this.Bavard =data;
     });

      this.storage.get('Creatif').then((data) => {
       console.log(data);
       this.Creatif =data;
     });

      this.storage.get('Caracteriel').then((data) => {
       console.log(data);
       this.Caracteriel =data;
     });

      this.storage.get('Faineant').then((data) => {
       console.log(data);
       this.Faineant =data;
     });     

      this.storage.get('Insolent').then((data) => {
       console.log(data);
       this.Insolent =data;
     });


  }

    



  ionViewDidLoad() {
    console.log('ionViewDidLoad CaracterePage');


}


  setData(){
    this.storage.set('myData', 'goodbye');
    this.storage.set('gentillesse', this.gentillesse);
    this.storage.set('Amoureux', this.Amoureux);
    this.storage.set('Joueur', this.Joueur);
    this.storage.set('Cafardeux', this.Cafardeux);
    this.storage.set('Bavard', this.Bavard);
    this.storage.set('Creatif', this.Creatif);
    this.storage.set('Caracteriel', this.Caracteriel);
    this.storage.set('Faineant', this.Faineant);
    this.storage.set('Insolent', this.Insolent);
  }

  getData(){
    this.storage.get('gentillesse');
    this.storage.get('Amoureux');
    this.storage.get('Joueur');
    this.storage.get('Cafardeux');
    this.storage.get('Bavard');
    this.storage.get('Creatif');
    this.storage.get('Caracteriel');
    this.storage.get('Faineant');
    this.storage.get('Insolent');
     this.storage.get('myData').then((data) => {
       console.log(data);
       console.log(this.gentillesse);
     });

      this.storage.get('gentillesse').then((data) => {
       console.log(data);
       this.gentillesse =data;
     });
  }


}
