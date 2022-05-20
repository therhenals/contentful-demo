import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { mergeMap } from 'rxjs/operators';
import { Browser } from '@capacitor/browser';
import { App } from '@capacitor/app';
import { callbackUri } from './auth.config';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  pages = [
    { title: 'Contentful', route: 'home' },
    { title: 'Google Map', route: 'map' },
    { title: 'Capacitor', route: 'capacitor' },
    { title: 'Account', route: 'account' },
    { title: 'Login', route: 'login' },
  ];

  constructor(public auth: AuthService, private ngZone: NgZone) {
    StatusBar.setBackgroundColor({
      color: '00377D',
    });
  }

  ngOnInit(): void {
    App.addListener('appUrlOpen', ({ url }) => {
      // Must run inside an NgZone for Angular to pick up the changes
      // https://capacitorjs.com/docs/guides/angular
      this.ngZone.run(() => {
        if (url?.startsWith(callbackUri)) {
          if (
            url.includes('state=') &&
            (url.includes('error=') || url.includes('code='))
          ) {
            this.auth
              .handleRedirectCallback(url)
              .pipe(mergeMap(() => Browser.close()))
              .subscribe();
          } else {
            Browser.close();
          }
        }
      });
    });
  }


}
