import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionsComponent } from './positions/positions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionsComponent } from './permissions/permissions.component';

const ROUTES: Route[] = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'positions', component: PositionsComponent },
  { path: 'permissions', component: PermissionsComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, PositionsComponent, EmployeeComponent, DashboardComponent, PermissionsComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
