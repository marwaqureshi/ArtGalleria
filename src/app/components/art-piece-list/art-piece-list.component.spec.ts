import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtPieceListComponent } from './art-piece-list.component';

describe('ArtPieceListComponent', () => {
  let component: ArtPieceListComponent;
  let fixture: ComponentFixture<ArtPieceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtPieceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtPieceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
