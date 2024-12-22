import { Component, Input } from '@angular/core';
import { ModeService } from 'src/app/core/services/mode.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {

@Input() slug : string | null = null;

  constructor( private modeService :  ModeService) { }

changeTheme() {
     this.modeService.switchMode();
}

}
