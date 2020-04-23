import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ClaimComponent } from './claim/claim.component';
import { CreateComponent } from './claim/create/create.component';
import { EditComponent } from './claim/edit/edit.component';
import { ViewComponent } from './claim/view/view.component';
import { PolicyComponent } from './policy/policy.component';
import { RenewComponent } from './policy/renew/renew.component';
import { ViewstatusComponent } from './policy/viewstatus/viewstatus.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ViewvehicleComponent } from './vehicle/viewvehicle/viewvehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MyprofileComponent } from './accounts/myprofile/myprofile.component';
import { LogoutComponent } from './accounts/logout/logout.component';


const routes: Routes = [{
  path:'menu',
  component:MenuComponent,
  children:[{
    path:'claim',
    component:ClaimComponent,
    children:[{
      path:'create',
      component:CreateComponent
    },
    {
      path:'edit',
      component:EditComponent
    },
    {
      path:'view',
      component:ViewComponent
    }]
  },

  {
    path:'policy',
    component:PolicyComponent,
    children:[{
      path:'renew',
      component:RenewComponent
    },
    {
      path:'viewstatus',
        component:ViewstatusComponent
    }]
  },

  {
    path:'vehicle',
    component:VehicleComponent,
    children:[{
      path:'viewvehicle',
      component:ViewvehicleComponent
    }]
  },

  {
    path:'accounts',
    component:AccountsComponent,
    children:[{
      path:'myprofile',
      component:MyprofileComponent
    },
    {
      path:'logout',
      component:LogoutComponent
    }]
  }]
},

{path:'', redirectTo:'menu', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
