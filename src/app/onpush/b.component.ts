import { Component, DoCheck } from '@angular/core';


@Component({
	selector: 'app-b',
	templateUrl: './b.component.html',
	styleUrls: ['./b.component.less']
})
export class BComponent implements DoCheck {

	ngDoCheck(): void {
		console.log('B checked');
	}

}
