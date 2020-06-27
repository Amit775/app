import { Component, DoCheck } from '@angular/core';


@Component({
	selector: 'app-aa',
	templateUrl: './aa.component.html',
	styleUrls: ['./aa.component.less']
})
export class AaComponent implements DoCheck {

	title = 'AA Component';
	ngDoCheck(): void {
		console.log('AA checked');
	}

}
