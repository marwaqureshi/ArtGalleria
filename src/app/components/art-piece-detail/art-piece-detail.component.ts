import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtPieceService } from '../../services/art-piece.service';
import { ArtPiece } from '../../models/art-piece.model';

@Component({
  selector: 'app-art-piece-detail',
  standalone: true,
  templateUrl: './art-piece-detail.component.html',
  styleUrls: ['./art-piece-detail.component.css'],
})
export class ArtPieceDetailComponent implements OnInit {
  artPiece!: ArtPiece; 

  constructor(
    private route: ActivatedRoute,
    private artPieceService: ArtPieceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 

    if (id) {
      const artPieceId = Number(id);
      this.artPieceService.getArtPieceById(artPieceId).subscribe((artPiece) => {
        this.artPiece = artPiece;
      });
    }
  }
}