import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MapService } from 'src/app/services/map.service';
import { Location } from '../../models/location.model'
@Component({
  selector: 'app-donation-stuff',
  templateUrl: './donation-stuff.component.html',
  styleUrls: ['./donation-stuff.component.scss']
})
export class DonationStuffComponent implements OnInit {
  locations: Location[] = [{
    address: "3900 Meramec Street",
    city: "St.Louis",
    state: "Missouri",
    zipcode: "63116"
  }];

  constructor() {
  }

  ngOnInit() { }
}
