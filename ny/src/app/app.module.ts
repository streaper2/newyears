import { NgModule, ErrorHandler, } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage  } from '@ionic/storage';
import { SQLite } from 'ionic-native';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { PushlovePage } from '../pages/pushlove/pushlove';
import { ResolutionPage } from '../pages/resolution/resolution';
import { PastPage } from '../pages/past/past';
import { CaracterePage } from '../pages/caractere/caractere';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { ProfilPage } from '../pages/profil/profil';


import { AuthData } from '../providers/auth-data';
import { UserProvider } from '../providers/user-provider';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

   const firebaseConfig= {
      apiKey: "AIzaSyCr_WsCB5OscB8WOM-olv-XaUICMWzYzXU",
      authDomain: "ionic2firebase-bfcff.firebaseapp.com",
      databaseURL: "https://ionic2firebase-bfcff.firebaseio.com",
      storageBucket: "ionic2firebase-bfcff.appspot.com",
      messagingSenderId: "770848402217"
    };


const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    MyApp,
    Page1,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    Page2,
    PushlovePage,
    ResolutionPage,
    PastPage,
    ProfilPage,
    CaracterePage
  ],
  imports: [
    IonicModule.forRoot(MyApp), AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    Page2,
    PushlovePage,
    ResolutionPage,
    PastPage,
    ProfilPage,
    CaracterePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, SQLite, AuthData, UserProvider]
})
export class AppModule {}
