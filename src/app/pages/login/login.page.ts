import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { callbackUri } from 'src/app/auth.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user$ = this.auth.isAuthenticated$.pipe(switchMap(() => this.auth.user$));

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth
      .buildAuthorizeUrl()
      .pipe(mergeMap((url) => Browser.open({ url, windowName: '_self' })))
      .subscribe();
  }

  logout() {
    // Use the SDK to build the logout URL
    this.auth
      .buildLogoutUrl({ returnTo: callbackUri })
      .pipe(
        tap((url) => {
          // Call the logout fuction, but only log out locally
          this.auth.logout({ localOnly: true });
          // Redirect to Auth0 using the Browser plugin, to clear the user's session
          Browser.open({ url, windowName: '_self' });
        })
      )
      .subscribe();
  }

}
