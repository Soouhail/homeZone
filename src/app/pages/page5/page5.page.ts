import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {
loading : boolean;

  constructor( 
    private router : Router,
    public navCtrl : NavController,
    public toastCtrl : ToastController,
    public loadingCtrl : LoadingController
        ) { }

  ngOnInit() {
  }
  toHouses(){
    this.navCtrl.navigateForward('page4')
  }
  toMap(){
    this.navCtrl.navigateForward('page3')
  }
  toContact(){
    this.navCtrl.navigateForward('page5')
  }
 
    async  sendInfo(){
      let loading = await this.loadingCtrl.create({
        message: 'Please Wait...',
        duration: 5000
      });
      const toast = await this.toastCtrl.create({
        header: 'We received your message' ,
        message: 'We will answer you as soon as possible',
        position: 'top',
        duration: 5000,
        buttons: [        
           {
            text: 'Done',
            role: 'cancel',
            icon: 'checkmark-outline', 
          }
        ]
      });
      toast.present();

      setTimeout(() => {
        window.location.reload();

      }, 5000);   

      this.navCtrl.navigateForward('page3');
      await loading.present();




    

}
//                //toast Contact Support//
// async openToast() {
//   const toast = await this.toastCtrl.create({
//     header: 'Contact Support by :',
//     message: 'nasrsouheil1@gmail.com',
//     position: 'top',
//     duration: 5000,
//     buttons: [        
//        {
//         text: 'Done',
//         role: 'cancel',
//         icon: 'checkmark-outline', 
//       }
//     ]
//   });
//   toast.present();
// }

}




