import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { ApiService } from '../api.service';
import { episode } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() public List: episode[] = [];
  @Input() public numberOfSeason!: number;
  public episode$: Observable<episode[]> = of([]);

  constructor(private apiService: ApiService, private router: Router) {}

  public ngOnInit() {
    this.numberOfSeason = this.apiService.numberOfSezon.value;
    this.updateList();
  }

  public updateList() {
    this.episode$ = this.apiService.getEpisode(this.numberOfSeason).pipe();
  }

  public showMenu() {
    this.router.navigate(['home'])
  }
}
