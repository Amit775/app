import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';


@Component({
	selector: 'app-aab',
	templateUrl: './aab.component.html',
	styleUrls: ['./aab.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AabComponent implements DoCheck {

	title = 'AAB Component';
	ngDoCheck(): void {
		console.log('AAB checked');
	}

	log(): void {
		console.log('AAB triggered');
	}

}
