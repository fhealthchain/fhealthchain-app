import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PrimaryClinicComponent} from "../shared/primary-clinic/primary-clinic.component";
import {AddPermissionComponent} from "./components/add-permission/add-permission.component";
import {PatientDetailComponent} from "./components/patient-detail/patient-detail.component";
import {PatientComponent} from "./patient.component";

const routes: Routes = [
  {
    path: '',
    component: PrimaryClinicComponent,
    children: [
      {
        path: '',
        component: PatientComponent
      },
      {
        path: 'add-permission',
        component: AddPermissionComponent
      },
      {
        path: ':ehr',
        component: PatientDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule {

}
