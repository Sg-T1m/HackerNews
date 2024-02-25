import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NewsListComponent } from './components/NewsList/NewsList.component';
import { AppRoutingModule } from './app.routes';
import { OneNewsComponent } from './components/OneNews/OneNews.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentListComponent } from './components/commentList/commentList.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    NewsListComponent,
    OneNewsComponent,
    CommentComponent,
    CommentListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
