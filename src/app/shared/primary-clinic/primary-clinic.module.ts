import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from './side-bar/side-bar.component';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {PrimaryClinicComponent} from './primary-clinic.component';
import {RouterModule} from '@angular/router';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [
    SideBarComponent,
    PrimaryClinicComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzCollapseModule,
    NzMenuModule,
    NzGridModule,
    NzIconModule,
    NzDropDownModule,
    NzAvatarModule
  ],
  exports: [PrimaryClinicComponent]
})
export class PrimaryClinicModule {
}
