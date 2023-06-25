import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent {
  private toastCtrl:ToastController;
  constructor() {}
  refreshing(event){
    setTimeout(() => {
      window.location.reload();
    },2000);

  }


}
