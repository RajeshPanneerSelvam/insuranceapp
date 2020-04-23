import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from './menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { ClaimComponent } from './claim/claim.component';
import { PolicyComponent } from './policy/policy.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateComponent } from './claim/create/create.component';
import { EditComponent } from './claim/edit/edit.component';
import { ViewComponent } from './claim/view/view.component';
import { RenewComponent } from './policy/renew/renew.component';
import { ViewstatusComponent } from './policy/viewstatus/viewstatus.component';
import { ViewvehicleComponent } from './vehicle/viewvehicle/viewvehicle.component';
import { MyprofileComponent } from './accounts/myprofile/myprofile.component';
import { LogoutComponent } from './accounts/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClaimComponent,
    PolicyComponent,
    VehicleComponent,
    AccountsComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    RenewComponent,
    ViewstatusComponent,
    ViewvehicleComponent,
    MyprofileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
