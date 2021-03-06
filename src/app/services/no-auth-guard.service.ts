import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs';

@Injectable()
export class NoAuthGuardService implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth
      .take(1)
      .map((authState: FirebaseAuthState) => {
        if (!!authState) {
          this.router.navigate(['/admin']);
          return false; 
        }

        return true;
      });
  }
}
