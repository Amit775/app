import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c.component';
import { CaComponent } from './ca/ca.component';
import { CbComponent } from './cb/cb.component';
import { CaaComponent } from './caa/caa.component';
import { CabComponent } from './cab/cab.component';
import { CbaComponent } from './cba/cba.component';
import { CbbComponent } from './cbb/cbb.component';



@NgModule({
  declarations: [CComponent, CaComponent, CbComponent, CaaComponent, CabComponent, CbaComponent, CbbComponent],
  imports: [
    CommonModule
  ]
})
export class DetachModule { }
