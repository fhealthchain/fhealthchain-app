import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClinicRoutingModule} from './clinic-routing.module';
import {ClinicComponent} from './clinic.component';
import {PrimaryClinicModule} from '../shared/primary-clinic/primary-clinic.module';
import {AddPatientComponent} from './add-patient/add-patient.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzMessageModule} from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    ClinicComponent,
    AddPatientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
    NzSelectModule,
    NzGridModule,
    ClinicRoutingModule,
    PrimaryClinicModule,
    NzListModule,
    NzDescriptionsModule,
    NzUploadModule,
    NzMessageModule,
    NzTableModule
  ]
})
export class ClinicModule {
}
