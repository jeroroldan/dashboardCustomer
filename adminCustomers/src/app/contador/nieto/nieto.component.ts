import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 0;
  }

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
    // this.contador = 0;
    // this.contadorCambio.emit(0);
  }
}
