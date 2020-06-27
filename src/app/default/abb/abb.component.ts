import { Component, DoCheck } from '@angular/core';


@Component({
	selector: 'app-abb',
	templateUrl: './abb.component.html',
	styleUrls: ['./abb.component.less']
})
export class AbbComponent implements DoCheck {

	title = 'ABB Component';
	ngDoCheck(): void {
		console.log('ABB checked');
	}

}
