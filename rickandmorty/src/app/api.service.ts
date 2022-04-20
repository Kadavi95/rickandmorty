import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlLink: string = 'https://rickandmortyapi.com/api'
  constructor(private httpClient: HttpClient) { }


  getAllSeasons() {
    
  }
}
