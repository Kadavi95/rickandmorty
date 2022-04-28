import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { episode, sezon } from './types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlLinkSezonsKiryl: string = 'https://ricknmortyapp.herokuapp.com'
  public numberOfSezon = new BehaviorSubject<number>(1)

  constructor(private httpClient: HttpClient) { }


  public getAllSeasons() {
    return this.httpClient.get<sezon[]>(`${this.urlLinkSezonsKiryl}/seasons`)
  }

  public getEpisode(id: number){
    return this.httpClient.get<episode[]>(`${this.urlLinkSezonsKiryl}/episodes/${id}`)
  }
}
