import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtPiece } from '../models/art-piece.model';

@Injectable({
  providedIn: 'root'
})
export class ArtPieceService {
  private apiUrl = 'http://localhost:4200/api/artpieces'; 

  constructor(private http: HttpClient) {}

  getAllArtPieces(): Observable<ArtPiece[]> {
    return this.http.get<ArtPiece[]>(`${this.apiUrl}/art-pieces`);
  }

  saveArtPiece(artPiece: ArtPiece): Observable<ArtPiece> {
    return this.http.post<ArtPiece>(`${this.apiUrl}/art-pieces`, artPiece);
  }

  deleteArtPiece(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/art-pieces/${id}`);
  }

  getArtPieceById(id: number): Observable<ArtPiece> {
    return this.http.get<ArtPiece>(`${this.apiUrl}/art-pieces/${id}`);
  }
}