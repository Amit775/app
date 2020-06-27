import { Component, DoCheck } from '@angular/core';


@Component({
	selector: 'app-ab',
	templateUrl: './ab.component.html',
	styleUrls: ['./ab.component.less']
})
export class AbComponent implements DoCheck {

	title = 'AB Component';
	ngDoCheck(): void {
		console.log('AB checked');
	}
}
