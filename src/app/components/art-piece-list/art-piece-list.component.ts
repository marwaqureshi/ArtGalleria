import { Component, OnInit } from '@angular/core';
import { ArtPieceService } from '../../services/art-piece.service';
import { ArtPiece } from '../../models/art-piece.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-art-piece-list',
  standalone: true,
  templateUrl: './art-piece-list.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrls: ['./art-piece-list.component.css']
})
export class ArtPieceListComponent implements OnInit {
  artPieces: ArtPiece[] = [];

  constructor(private artPieceService: ArtPieceService) {}

  ngOnInit(): void {
    this.getArtPieces();
  }

  getArtPieces(): void {
    this.artPieceService.getAllArtPieces().subscribe((data: ArtPiece[]) => {
      this.artPieces = data;
    });
  }
}