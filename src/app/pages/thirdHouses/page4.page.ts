import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
  template: `
  <ion-item-divider color="primary" >
    <ion-label id="title" class="text-center">Tunis</ion-label>
  </ion-item-divider>
  <ion-item color="secondary">
  <ion-label >Lac 1</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Rue Des Jasmins tunis  (s+2)</ion-label>
    <p>800 D</p>
    <ion-button color="success">
      <a href="tel:12345"><ion-icon name="call" color="light" slot="end"></ion-icon></a>
    </ion-button>
</ion-item>
<ion-item color="secondary">
  <ion-label><strong>lac 2</strong></ion-label>
</ion-item>
  <ion-item>
    <ion-label>Rue Des Jasmins tunis  (s+1)</ion-label>
    <p>1000 D</p>
    <ion-button color="success">
      <a href="tel:12345"><ion-icon name="call" color="light" slot="end"></ion-icon></a>
    </ion-button>
  </ion-item>
  <ion-item-divider color="primary">
    <ion-label  id="title">Sousse</ion-label>
  </ion-item-divider>
  <ion-item color="secondary">
  <ion-label>khzema</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Rue Des Jasmins Sousse  (s+2)</ion-label>
    <p>800 D</p>
    <ion-button color="success">
      <a href="tel:12345"><ion-icon name="call" color="light" slot="end"></ion-icon></a>
    </ion-button>
</ion-item>

<ion-item color="secondary">
  <ion-label>Sahloul</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Rue Des Jasmins Sousse  (s+1)</ion-label>
    <p>450 D</p>
    <ion-button color="success">
      <a href="tel:12345"><ion-icon name="call" color="light" slot="end"></ion-icon></a>
    </ion-button>
  </ion-item>
  <ion-item>
    <ion-label>Rue Des Jasmins Sousse (s+3)</ion-label>
    <p>1000 D</p>
    <ion-button color="success">
      <a href="tel:12345"><ion-icon name="call" color="light" slot="end"></ion-icon></a>
    </ion-button>
  </ion-item>
  <ion-item-divider color="primary">
    <ion-label id="title">Monastir</ion-label>
  </ion-item-divider>
  <ion-item color="secondary">
  <ion-label>lac 1</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Rue Des Jasmins monastir (s+2)</ion-label>
    <p>800 D</p>
    <ion-button color="success">
      <a href="tel:12345"><ion-icon name="call" color="light" slot="end"></ion-icon></a>
    </ion-button>
</ion-item>

<ion-item color="secondary">
  <ion-label>lac 1</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Rue Des Jasmins monastir (s+3)</ion-label>
    <p>1000 D</p>
    <ion-button color="success">
      <a href="tel:12345"><ion-icon name="call" color="light" slot="end"></ion-icon></a>
    </ion-button>
  </ion-item>
  <ion-footer>
  <ion-toolbar color="primary" class="footer-toolbar">
  <ion-segment class="footer-segment">
    <ion-segment-button layout="icon-start" color="primary" value="0" (click)="toMap()">
      <ion-label class="fontFooter">Map</ion-label>
      <ion-icon name="location-outline" color="success"></ion-icon>
    </ion-segment-button>

    <ion-segment-button value="home" layout="icon-start" value="1" (click)="toHouses()">
      <ion-label class="fontFooter">Available houses
        <ion-badge mode="ios" color="danger">6</ion-badge>
      </ion-label>
      <ion-icon name="home-outline" color="primary"></ion-icon>
    </ion-segment-button>

    <ion-segment-button layout="icon-start" color="primary" value="2" (click)="toContact()">
      <ion-label class="fontFooter">Contact us</ion-label>
      <ion-icon name="mail-outline" color="secondary"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>
  </ion-footer>
`,
})


export class Page4Page implements OnInit {
@ViewChild ('slides', { static: true }) slider: IonSlides;
segment = 0;
  constructor(
private navCtrl:NavController,
private router:Router
) { }
async segmentChanged(ev: any) {
  await this.slider.slideTo(this.segment);
}
async slideChanged() {
  this.segment = await this.slider.getActiveIndex();
}

  ngOnInit() {
  }
  toHouses(){
    this.navCtrl.navigateBack ('page4')
  }
  toMap(){
    this.navCtrl.navigateBack ('page3')
  }
  toContact(){
    this.navCtrl.navigateForward('page5')
  }

  }


