import { TestBed } from '@angular/core/testing';

import { ArtPieceService } from './art-piece.service';

describe('ArtPieceService', () => {
  let service: ArtPieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtPieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
