import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.scss']
})
export class DarkComponent {

  @Input () slug? : string | null = null;

}
