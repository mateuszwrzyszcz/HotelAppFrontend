import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface FavoriteHotel {
  id: number;
  name: string;
  address: string;
}

@Injectable({ providedIn: 'root' })
export class FavoriteService {
    private apiUrl = environment.baseApiUrl+"/favorites";
  
  
  constructor(private http: HttpClient) {}

  getFavorites(): Observable<FavoriteHotel[]> {
    return this.http.get<FavoriteHotel[]>(this.apiUrl);
  }

  add(hotelId: number): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/${hotelId}`, {});
  }

  remove(hotelId: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${hotelId}`);
  }
}
