import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
    private apiUrl = environment.baseApiUrl;
  

  constructor(private http: HttpClient) {}

  getRoomsByHotel(
    hotelId: number,
    guests: number,
    checkIn: string,
    checkOut: string,
  ) {
    return this.http.get<any[]>(
      this.apiUrl+`/hotel/${hotelId}/rooms`,
      {
        params: {
          guests,
          checkIn,
          checkOut,
        },
      },
    );
  }

  getRoomById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/rooms/${id}`);
  }
}
