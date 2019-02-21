import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.scss']
})
export class ManageItemComponent implements OnInit {

  @Input() conBill: any;
  constructor() { }

  ngOnInit() {
  }

}
