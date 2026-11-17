import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Hotel {
  id: number;
  name: string;
  city: string;
  address: string;
  description: string;
  isFavorite: boolean;
  lowestPrice?: number;
}

@Injectable({
  providedIn: 'root',
})
export class HotelService {
    private apiUrl = environment.baseApiUrl
  

  constructor(private http: HttpClient) {}

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  searchHotelsByCity(city: string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotels/city/${city}`);
  }
  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/hotels/${id}`);
  }

  searchCities(query: string): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.apiUrl}/hotels/cities/search?query=${query}`,
    );
  }
}
