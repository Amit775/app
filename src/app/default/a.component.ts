import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';


@Component({
	selector: 'app-a',
	templateUrl: './a.component.html',
	styleUrls: ['./a.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent implements DoCheck {

	title = 'A Component';
	ngDoCheck(): void {
		console.log('A checked');
	}

	log(): void {
		console.log('A triggered');
	}
}
