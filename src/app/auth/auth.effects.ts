import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  // mediante este método creamos el observable y nos subscribimos
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {
    // vamos a realizarlo de una forma más óptima
    // actions$.subscribe(action => {
    //   if (action.type === '[Login Page] User Login') {
    //     localStorage.setItem('user', JSON.stringify(action['user']));
    //   }
    // });
  }
}
