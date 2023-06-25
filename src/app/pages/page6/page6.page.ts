import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {IonSlides } from '@ionic/angular';

declare var google:any;
@Component({
  selector: 'app-page6',
  templateUrl: './page6.page.html',
  styleUrls: ['./page6.page.scss'],
})
export class Page6Page implements OnInit {
  map : any ;
  country:any;
  segment = 0;

  @ViewChild ('slides', { static: true }) slider: IonSlides;

  countries =  [
    {
      name : "Ariana",
      value : "Ariana",
      cor:[ 36.8667, 10.1400 ]

    },
    {

      name: "Beja",
      value : "Beja",
      cor:[ 36.7464633,  9.1177337 ]

    },
    {

      name: "Ben Arous",
      value : "Ben Arous",
      cor:[ 36.7545, 10.2217 ]
    },
    {
      name: "Bizerte",
      value : "Bizerte",
      cor:[ 37.2904, 9.8550 ]

    },
    {
      name: "Gabes",
      value : "Gabes",
      cor:[ 33.9004, 10.1000 ]
    },
    {
      name: "Gafsa",
      value : "Gafsa",
      cor:[ 34.4204, 8.7800 ]

    },
    {
      name: "Jendouba",
      value : "Jendouba",
      cor:[ 36.5000, 8.7500 ]

    },
    {
      name: "Kairouan",
    value : "Kairouan",
    cor:[ 35.6804, 10.1000 ]

    },
    {
      name: "Kasserine",
      value : "Kasserine",
      cor:[ 35.1804, 8.8300 ]

    },
    {
      name: "Kebili",
      value : "Kebili",
      cor:[ 33.6900, 8.9710]
    },
    {
      name: "Kef",
      value : "Kef",
      cor:[  36.1826,	8.7148]

    },
    {
      name: "Mahdia",
      value : "Mahdia",
      cor:[ 35.4839,	11.0409]

    },
    {
      name: "Manouba",
      value : "Manouba",
      cor:[ 36.8101	,10.0956]

    },
    {
      name: "Medenine",
      value : "Medenine",
      cor:[33.4000,	10.4167]
    },
    {
      name: "Monastir",
      value : "Monastir",
      cor:[ 35.7307	,10.7673]
    },
    {
      name: "Nabeul",
      value : "Nabeul",
      cor:[ 36.4603	,10.7300 ]
    },
    {
      name: "Sfax",
      value : "Sfax",
      cor:[ 34.7500,	10.7200]

    },
    {
      name: "Sidi Bouzid",
      value : "Sidi Bouzid",
      cor:[ 35.0167,	9.5000]

    },
    {
      name: "Siliana",
      value : "Siliana",
      cor:[36.0833,	9.3833]
    },
    {
      name: "Sousse",
      value : "Sousse",
      cor:[ 35.8300,	10.6250]

    },
    {
      name: "Tataouine",
      value : "Tataouine",
      cor:[ 33.0000 ,	10.4667]
    },
    {
      name: "Tozeur",
      value : "Tozeur",
      cor:[ 33.9304,	8.1300]

    },
    {
      name: "Tunis",
      value : "Tunis",
      cor:[36.8008	,10.1800]

    },
    {
      name: "Zaghouan",
      value : "Zaghouan",
      cor:[ 36.4000	,10.1470]

    }
  ]
  constructor(
public router : Router,
public navCtrl : NavController
) { }
  ngOnInit() {
  }
  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }
  ionViewDidEnter(){
    this.map = new google.maps.Map(document.getElementById("map"),{
      center: { lat: 33.892166, lng: 9.561555499999997 },
      zoom: 8,
    });

  }
public optionsFn(): void {
  var cor = this.countries.find(i => i.name == this.country).cor
  this.map = new google.maps.Map(document.getElementById("map"),{
    center: { lat: cor[0], lng: cor[1] },
    zoom: 12,
  });
}
toMap(){
  this.navCtrl.navigateForward('page6')
}
tomarketing(){
  this.navCtrl.navigateForward('marketing')
}
toAddhome(){
  this.navCtrl.navigateForward('page6-addhome')}
}

