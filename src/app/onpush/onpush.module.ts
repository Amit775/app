import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BComponent } from './b.component';
import { BaComponent } from './ba/ba.component';
import { BaaComponent } from './baa/baa.component';
import { BabComponent } from './bab/bab.component';
import { BbComponent } from './bb/bb.component';
import { BbaComponent } from './bba/bba.component';
import { BbbComponent } from './bbb/bbb.component';


@NgModule({
	declarations: [
		BComponent,
		BaComponent,
		BbComponent,
		BaaComponent,
		BabComponent,
		BbaComponent,
		BbbComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		BComponent
	]
})
export class OnpushModule { }
