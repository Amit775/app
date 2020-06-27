import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CComponent } from './c.component';
import { CaComponent } from './ca/ca.component';
import { CaaComponent } from './caa/caa.component';
import { CabComponent } from './cab/cab.component';
import { CbComponent } from './cb/cb.component';
import { CbaComponent } from './cba/cba.component';
import { CbbComponent } from './cbb/cbb.component';


@NgModule({
	declarations: [
		CComponent,
		CaComponent,
		CbComponent,
		CaaComponent,
		CabComponent,
		CbaComponent,
		CbbComponent
	],
	imports: [
		CommonModule
	],
	exports: [CComponent]
})
export class DetachModule { }
