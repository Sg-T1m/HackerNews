import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/NewsList/NewsList.component';
import { NgModule } from '@angular/core';
import { OneNewsComponent } from './components/OneNews/OneNews.component';

export const routes: Routes = [
  {
    path: '',
    component: NewsListComponent,
  },
  {
    path: 'NewsMore/:id',
    component: OneNewsComponent,
    data: { message: '/:' },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
