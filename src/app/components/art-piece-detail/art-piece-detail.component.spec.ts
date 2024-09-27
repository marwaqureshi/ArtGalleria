import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtPieceDetailComponent } from './art-piece-detail.component';

describe('ArtPieceDetailComponent', () => {
  let component: ArtPieceDetailComponent;
  let fixture: ComponentFixture<ArtPieceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtPieceDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtPieceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
