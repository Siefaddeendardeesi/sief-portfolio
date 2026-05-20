import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    expect(TestBed.inject(AlertService)).toBeTruthy();
  });

  it('exposes the documented alert methods', () => {
    const service = TestBed.inject(AlertService);
    expect(typeof service.success).toBe('function');
    expect(typeof service.error).toBe('function');
    expect(typeof service.confirm).toBe('function');
    expect(typeof service.toast).toBe('function');
    expect(typeof service.input).toBe('function');
    expect(typeof service.contactForm).toBe('function');
  });
});
