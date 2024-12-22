import { Component, OnInit } from '@angular/core';
import { ModeService } from './core/services/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private modeService : ModeService) {
  }
  
  
  ngOnInit(): void {
   const mode = this.modeService.getMode();
    if (mode === 'dark'){
      this.loadDarkMode();
  }}

  loadDarkMode() {    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/dark-mode.css';
    document.head.appendChild(link);
  }



  
   



  title = 'anaximShop';
}
