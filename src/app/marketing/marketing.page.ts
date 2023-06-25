import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.page.html',
  styleUrls: ['./marketing.page.scss'],
})
export class MarketingPage implements OnInit {

  constructor(
    public router : Router,
    public navCtrl : NavController) {

  }


  ngOnInit() {

  }
  goToRestaurant(restaurantId: string) {
    this.navCtrl.navigateForward('restaurent');
  }

  goToGym(gymId: string) {
    this.navCtrl.navigateForward(`/gym/${gymId}`);
  }

  goToTraining(trainingId: string) {
    this.navCtrl.navigateForward(`/training/${trainingId}`);
  }
}
