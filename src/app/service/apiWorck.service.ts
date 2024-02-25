import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iFrontPage } from '../interfase/IFrontPage';
import { IOneNews } from '../interfase/IOneNews';

@Injectable({
  providedIn: 'root',
})
export class ApiWorckService {
  constructor(private http: HttpClient) {}
  getDataNewsList(): Observable<iFrontPage> {
    return this.http.get<iFrontPage>(
      `http://hn.algolia.com/api/v1/search?tags=front_page`,
      {
        params: new HttpParams(),
      }
    );
  }
  getOneNews(url: string): Observable<IOneNews> {
    return this.http.get<IOneNews>(
      `https://hn.algolia.com/api/v1/items/${url}`,
      {
        params: new HttpParams(),
      }
    );
  }
}
