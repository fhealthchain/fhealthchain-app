import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'clinic',
    loadChildren: () => import('./clinic/clinic.module').then(m => m.ClinicModule)
  },
  {
    path: 'patients',
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
