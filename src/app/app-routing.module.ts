import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from '../app/pages/personal/personal.component';
import { RegisterComponent } from '../app/pages/register/register.component';
import { FamilymembersComponent } from '../app/pages/familymembers/familymembers.component';
import { AddfamilymemberComponent } from '../app/pages/addfamilymember/addfamilymember.component';
import { EditfamilymemberComponent } from '../app/pages/editfamilymember/editfamilymember.component';
import { LoginComponent } from '../app/pages/login/login.component';
const routes: Routes = [
  { path: 'familymembers', component: FamilymembersComponent },
  { path: 'register', component: PersonalComponent },
  { path: 'addfamily', component: AddfamilymemberComponent },
  { path: 'editfamily', component: EditfamilymemberComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
