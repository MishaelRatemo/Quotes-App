import { TestBed } from '@angular/core/testing';

import { MyquotesService } from './myquotes.service';

describe('MyquotesService', () => {
  let service: MyquotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyquotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
