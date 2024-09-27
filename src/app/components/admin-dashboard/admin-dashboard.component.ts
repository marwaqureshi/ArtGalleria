import { Component, OnInit } from '@angular/core';
import { ArtPieceService } from '../../services/art-piece.service';
import { ArtPiece } from '../../models/art-piece.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  artPieces: ArtPiece[] = [];
  newArtPiece: ArtPiece = {
    id: 0, // Initialize id to 0 or a placeholder value
    name: '',
    description: '',
    category: '',
    medium: '',
    imageUrl: ''
  };

  constructor(private artPieceService: ArtPieceService) {}

  ngOnInit(): void {
    this.getArtPieces();
  }

  getArtPieces(): void {
    this.artPieceService.getAllArtPieces().subscribe((artPieces: ArtPiece[]) => {
      this.artPieces = artPieces;
    });
  }

  addArtPiece(): void {
    this.artPieceService.saveArtPiece(this.newArtPiece).subscribe((artPiece: ArtPiece) => {
      this.artPieces.push(artPiece);
      this.resetForm();
    });
  }

  resetForm(): void {
    this.newArtPiece = {
      id: 0, // Reset id to a placeholder value
      name: '',
      description: '',
      category: '',
      medium: '',
      imageUrl: ''
    };
  }

  deleteArtPiece(id: number): void {
    this.artPieceService.deleteArtPiece(id).subscribe(() => {
      this.artPieces = this.artPieces.filter(artPiece => artPiece.id !== id);
    });
  }
}