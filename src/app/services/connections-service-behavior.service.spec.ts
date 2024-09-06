import { TestBed } from '@angular/core/testing';

import { ConnectionsServiceBehaviorService } from './connections-service-behavior.service';

describe('ConnectionsServiceBehaviorService', () => {
  let service: ConnectionsServiceBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionsServiceBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
