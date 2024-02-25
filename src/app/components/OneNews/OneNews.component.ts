import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOneNews } from '../../interfase/IOneNews';
import { ApiWorckService } from '../../service/apiWorck.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-OneNews',
  templateUrl: './OneNews.component.html',
  styleUrls: ['./OneNews.component.css'],
})
export class OneNewsComponent implements OnInit {
  constructor(
    private ApiWorckService: ApiWorckService,
    private route: ActivatedRoute
  ) {}

  idNews!: number;
  oneNews$!: Observable<IOneNews>;
  NewsContent!: IOneNews;
  load: boolean = false;
  ngOnInit() {
    this.load = false
    this.idNews = this.route.snapshot.params['id'];
    this.oneNews$ = this.ApiWorckService.getOneNews(this.idNews.toString());
    this.oneNews$.subscribe((news) => {
      this.NewsContent = news;
      console.log(this.NewsContent.children);
      this.load = true;
    });
  }
}
