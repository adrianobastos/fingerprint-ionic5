import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FingerprintOptions} from '@ionic-native/fingerprint-aio';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fingerprintOptions : FingerprintOptions;

  constructor(
    public navCtrl: NavController,
    public fingerAuth: FingerprintAIO
  ){  }

  ngOnInit() {
  }

  public showFingerprintAuthDlg(){
      this.fingerprintOptions = {
          clientId:'fingerprint-demo',
          clientSecret: 'password',
          disableBackup: true
      }
      this.fingerAuth.isAvailable().then(result =>{
        if(result === "OK"){
            this.fingerAuth.show(this.fingerprintOptions)
            .then((result: any) => console.log(result))
            .catch((error: any) => console.log(error));
        }
      });
  }

}
