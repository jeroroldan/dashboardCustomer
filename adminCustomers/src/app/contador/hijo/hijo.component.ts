import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction, actions } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 0;
  }

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar() {
    // this.contador = this.contador * 2;
    const accion = new MultiplicarAction(2);
    this.store.dispatch(accion);
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
    // this.contador = this.contador / 2;
    // this.cambioContador.emit(this.contador);
  }
}
