import { Component, OnInit } from '@angular/core';
import { ApiWorckService } from '../../service/apiWorck.service';
import { Observable } from 'rxjs/internal/Observable';
import { iFrontPage } from '../../interfase/IFrontPage';
import { INews } from '../../interfase/IFrontPage/INews';

@Component({
  selector: 'app-NewsList',
  templateUrl: './NewsList.component.html',
  styleUrls: ['./NewsList.component.scss'],
})
export class NewsListComponent implements OnInit {

  constructor(private ApiWorckService: ApiWorckService) {}
  NewsList$!: Observable<iFrontPage>;
  NewsList!: INews[];
  id: number = 100
  loader: boolean = false
  ngOnInit(): void {
    this.loader = false
    this.NewsList$ = this.ApiWorckService.getDataNewsList();
    this.NewsList$.subscribe((x) => {
      this.NewsList = x.hits;
      this.loader = true
    });
  
  }
}
