import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AComponent } from './a.component';
import { AaComponent } from './aa/aa.component';
import { AaaComponent } from './aaa/aaa.component';
import { AabComponent } from './aab/aab.component';
import { AbComponent } from './ab/ab.component';
import { AbaComponent } from './aba/aba.component';
import { AbbComponent } from './abb/abb.component';


@NgModule({
	declarations: [
		AComponent,
		AaComponent,
		AbComponent,
		AaaComponent,
		AabComponent,
		AbaComponent,
		AbbComponent,
	],
	imports: [
		CommonModule
	],
	exports: [AComponent]
})
export class DefaultModule { }
