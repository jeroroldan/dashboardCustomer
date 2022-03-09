import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from './app.reducers';
import {
  DecrementarAction,
  IncrementarAction,
} from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 10;
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  incrementar() {
    // this.contador = this.contador + 1;
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar() {
    // this.contador = this.contador - 1;
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }
}
