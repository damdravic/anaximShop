import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModeService {
  constructor() {}
        // mode is working but need to cretae with store ngrx

        
  getMode() {
    return localStorage.getItem('mode');
  }

  switchMode() {
    console.log('switching mode');
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
      localStorage.setItem('mode', 'light');
      this.refreshMode();
    } else {
      localStorage.setItem('mode', 'dark');
      this.refreshMode();
    }
  }

  refreshMode() {
    const existingLink = document.getElementById('dark-mode');

    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'assets/dark-mode.css';
      link.id = 'dark-mode';

      document.head.appendChild(link);
    } else {
      document.head.removeChild(existingLink);
    }
  }
}
