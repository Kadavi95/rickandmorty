import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { ApiService } from '../api.service';
import { sezon } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor(private router: Router, private service: ApiService) { }
  public seasons$: Observable<sezon[]> = of([])

  ngOnInit() {
    this.createItems()
  }

  public createItems(){
    this.seasons$ = this.service.getAllSeasons().pipe()
  }

  public changeRoute(Id: number){
    this.service.numberOfSezon.next(Id);
    this.router.navigate(['home','list'])
  }

}
