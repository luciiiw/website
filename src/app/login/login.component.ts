import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire) { }

  ngOnInit() { }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    });
  }
}
