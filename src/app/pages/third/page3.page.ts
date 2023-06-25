import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import {IonSlides } from '@ionic/angular';
declare var google:any;
@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
  @ViewChild ('slides', { static: true }) slider: IonSlides;
  segment = 0;
map : any ;
country:any;
countries =  [
  {
    name : "أريانة",
    value : "أريانة",
    cor:[ 36.8667, 10.1400 ]

  },
  {

    name: "باجة",
    value : "باجة",
    cor:[ 36.7464633,  9.1177337 ]

  },
  {

    name: "بن عروس",
    value: "بن عروس",
    cor:[ 36.7545, 10.2217 ]
  },
  {
    name: "بنزرت",
    value : "بنزرت",
    cor:[ 37.2904, 9.8550 ]

  },
  {
    name: "ڨابس",
    value : "ڨابس",
    cor:[ 33.9004, 10.1000 ]
  },
  {
    name: "ڨفصة",
    value : "ڨفصة",
    cor:[ 34.4204, 8.7800 ]

  },
  {
    name: "جندوبة",
    value : "جندوبة",
    cor:[ 36.5000, 8.7500 ]

  },
  {
    name: "القيروان",
  value : "القيروان",
  cor:[ 35.6804, 10.1000 ]

  },
  {
    name: "الڨصرين",
    value : "الڨصرين",
    cor:[ 35.1804, 8.8300 ]

  },
  {
    name: "ڨبلي",
    value : "ڨبلي",
    cor:[ 33.6900, 8.9710]
  },
  {
    name: "الكاف",
    value : "الكاف",
    cor:[  36.1826,	8.7148]

  },
  {
    name: "المهدية",
    value : "المهدية",
    cor:[ 35.4839,	11.0409]

  },
  {
    name: "منوبة",
    value : "منوبة",
    cor:[ 36.8101	,10.0956]

  },
  {
    name: "مدنين",
    value : "مدنين",
    cor:[33.4000,	10.4167]
  },
  {
    name: "المنستير",
    value : "المنستير",
    cor:[ 35.7307	,10.7673]
  },
  {
    name: "نابل",
    value : "نابل",
    cor:[ 36.4603	,10.7300 ]
  },
  {
    name: "صفاقس",
    value : "صفاقس",
    cor:[ 34.7500,	10.7200]

  },
  {
    name: "سيدي بوزيد",
    value : "سيدي بوزيد",
    cor:[ 35.0167,	9.5000]

  },
  {
    name: "سليانة",
    value : "سليانة",
    cor:[36.0833,	9.3833]
  },
  {
    name: "سوسة",
    value : "سوسة",
    cor:[ 35.8300,	10.6250]

  },
  {
    name: "تطاوين",
    value : "تطاوين",
    cor:[ 33.0000 ,	10.4667]
  },
  {
    name: "توزر",
    value : "توزر",
    cor:[ 33.9304,	8.1300]

  },
  {
    name: "تونس",
    value : "تونس",
    cor:[36.8008	,10.1800]

  },
  {
    name: "زغوان",
    value : "زغوان",
    cor:[ 36.4000	,10.1470]

  }
]
showCloseButton: boolean ;
  constructor(
    private navCtrl:NavController,
    private router : Router,
    public toastCtrl : ToastController
   ) {}
   async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
   ngOnInit() {
  }

  ionViewDidEnter(){
    this.map = new google.maps.Map(document.getElementById("map"),{
      center: { lat: 33.892166, lng: 9.561555499999997 },
      zoom: 8,
    });

    this.countries.forEach(country => {

      new google.maps.Marker({
        position: {lat:country.cor[0],lng:country.cor[1]},
        map:this.map,
        title:country.name,
      });
    })

  }
public optionsFn(): void {
  var cor = this.countries.find(i => i.name == this.country).cor
  this.map = new google.maps.Map(document.getElementById("map"),{
    center: { lat: cor[0], lng: cor[1] },
    zoom: 12,
  });
}
toHouses(){
  this.navCtrl.navigateForward('page4')
}
toMap(){
  this.navCtrl.navigateForward('page3')
}
toContact(){
  this.navCtrl.navigateForward('page5')
}}
