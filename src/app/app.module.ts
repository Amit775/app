import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultModule } from './default/default.module';
import { DetachModule } from './detach/detach.module';
import { OnpushModule } from './onpush/onpush.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		DefaultModule,
		OnpushModule,
		DetachModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
