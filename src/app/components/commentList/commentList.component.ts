import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../interfase/IComment';

@Component({
  selector: 'app-commentList',
  templateUrl: './commentList.component.html',
  styleUrls: ['./commentList.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() comments!: IComment[]
  constructor() { }
  test: IComment[] = this.comments;
  ngOnInit() {
    console.log(this.comments)
  }

}
