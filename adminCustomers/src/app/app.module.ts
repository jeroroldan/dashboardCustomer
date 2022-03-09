import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//store module
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materailModule/material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { MayusculaPipe } from './pipe/mayuscula.pipe';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { contadorReducer } from './contador/contador.reducer';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    MayusculaPipe,
    HijoComponent,
    NietoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
