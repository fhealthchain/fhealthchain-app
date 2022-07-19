import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientComponent} from './patient.component';
import {NzListModule} from 'ng-zorro-antd/list';
import {PatientRoutingModule} from './patient-routing.module';
import {PrimaryClinicModule} from '../shared/primary-clinic/primary-clinic.module';
import {PatientDetailComponent} from './components/patient-detail/patient-detail.component';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddPermissionComponent } from './components/add-permission/add-permission.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    PatientComponent,
    PatientDetailComponent,
    AddPermissionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientRoutingModule,
    PrimaryClinicModule,
    NzListModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzDividerModule,
    NzTableModule
  ]
})
export class PatientModule {
}
