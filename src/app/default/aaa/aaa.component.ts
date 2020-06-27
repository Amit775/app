import { Component, DoCheck } from '@angular/core';


@Component({
	selector: 'app-aaa',
	templateUrl: './aaa.component.html',
	styleUrls: ['./aaa.component.less']
})
export class AaaComponent implements DoCheck {

	title = 'AAA Component';
	ngDoCheck(): void {
		console.log('AAA checked');
	}

}
