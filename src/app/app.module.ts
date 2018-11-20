import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ClientsComponent } from './clients/clients.component';
import { PrintComponent } from './print/print.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashbordComponent,
    ClientsComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
