import { Component, OnInit } from '@angular/core';
import { BillService } from '../../../services/bill.service';
import { Bill } from '../../models/bill.model';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment'
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Bill
  constructor(private postService: BillService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      this.getPost(params["postId"])
    })

  }

  getPost(postId: string) {
    return this.postService.getPostById(postId).subscribe(post => {
      console.log(post)
      this.post = post;
      console.log('clicked')
    })
  }



}
