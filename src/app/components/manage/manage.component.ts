import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../../services/bill.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Bill } from '../models/bill.model';
import * as moment from 'moment'
import { MatDialog } from '@angular/material';
import { PostDetailComponent } from '../donation/post-detail/post-detail.component';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit, OnDestroy {
  searchText = '';
  titleSearch = '';
  descriptionSearch = '';
  addressSearch = '';
  dateSearch = ''
  bills: Bill[] = []

  // bills: Bill[] = []

  // manage = []

  destroy$: Subject<null> = new Subject<null>()
  constructor(private billService: BillService,
    private matDialog: MatDialog) { }

  ngOnInit() {
    // this.fetchBills();
    const billObservable = this.billService.getManage();

    billObservable.subscribe((bills: Bill[]) => {
      this.bills = bills
      // console.log(this.bill)
    })
  }

  openDetail() {
    this.matDialog.open(PostDetailComponent, {
      width: '700px',
      height: '700px'
    })
  }



  formatDate(date: string): string {
    return `${moment(date).fromNow()}`
  }
  // this.billService.addBillSubject$
  //   .pipe(takeUntil(this.destroy$))
  //   .subscribe(bill => {
  //     console.log(bill)
  //     this.manage.push(bill)
  //   })




  // private fetchBills() {
  //   this.billService.getManage()
  //     .subscribe(data => {
  //       this.manage.push(...data.bill)
  //       console.log(this.manage)
  //     })
  // }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete()
  }
}
