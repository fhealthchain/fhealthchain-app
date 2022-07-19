import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimaryClinicComponent} from '../shared/primary-clinic/primary-clinic.component';
import {AddPatientComponent} from './add-patient/add-patient.component';
import {ClinicComponent} from './clinic.component';

const routes: Routes = [
  {
    path: '',
    component: PrimaryClinicComponent,
    children: [
      {
        path: 'doctor',
        component: ClinicComponent
      },
      {
        path: 'add-patient',
        component: AddPatientComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicRoutingModule {
}
