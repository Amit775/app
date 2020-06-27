import { Component, DoCheck } from '@angular/core';


@Component({
	selector: 'app-c',
	templateUrl: './c.component.html',
	styleUrls: ['./c.component.less']
})
export class CComponent implements DoCheck {

	ngDoCheck(): void {
		console.log('C checked');
	}

}
