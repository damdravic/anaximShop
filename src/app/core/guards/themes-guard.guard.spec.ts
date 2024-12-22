import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { themesGuardGuard } from './themes-guard.guard';

describe('themesGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => themesGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
