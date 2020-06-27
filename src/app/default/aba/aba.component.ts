import { Component, DoCheck } from '@angular/core';


@Component({
	selector: 'app-aba',
	templateUrl: './aba.component.html',
	styleUrls: ['./aba.component.less']
})
export class AbaComponent implements DoCheck {

	title = 'ABA Component';
	ngDoCheck(): void {
		console.log('ABA checked');
	}

}
