import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ClientsComponent } from './clients/clients.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [ { path: 'print', component: PrintComponent  }, { path: 'clients', component: ClientsComponent },{ path: '', component: DashbordComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
