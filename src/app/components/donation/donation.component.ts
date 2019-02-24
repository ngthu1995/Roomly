import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BillService } from '../../services/bill.service';
import { Bill } from '../models/bill.model';
import { SelectOption, timeOptions } from './constants';
// import { ToastrService } from 'ngx-toastr'
import * as moment from 'moment'
import { ToastrService } from 'ngx-toastr';
import { HereService } from '../../services/here.service';
@Component({
    selector: 'app-post-form',
    templateUrl: './donation.component.html',
    styleUrls: ['./donation.component.css']
})

export class DonationComponent implements OnInit {


    // define location
    public query: string;
    public position: string;
    public locations: Array<any>;

    addBillForm: FormGroup;

    // add Bill
    newBill: Bill

    // fetch bills
    bills: Bill[] = []
    constructor(private formBuilder: FormBuilder,
        private billService: BillService,
        private toastr: ToastrService,
        private here: HereService) { }

    timeFormOptions = timeOptions

    ngOnInit() {
        // this.initForm()

        this.newBill = new Bill();

        const billObservable = this.billService.getManage();


        // setting up query
        this.query = this.newBill.street;
        this.position = "";

        billObservable.subscribe((bills: Bill[]) => {
            this.bills.push(...bills)
            console.log(this.bills)
        })

    }

    createBill() {
        this.billService.createBill(this.newBill).subscribe(
            (bill: Bill) => {
                this.toastr.success('You have successfully book a donation. Please check email for the confirmation', 'Success')
            }
        )
    }

    formatDate(date: string): string {
        return `${moment(date).fromNow()}`
    }

    // onSendMail() {
    //     this.billService.notiMan().subscribe(_ => {
    //         console.log('mail sent')
    //     })
    // }
    // private initForm() {
    //     this.addBillForm = this.formBuilder.group({
    //         title: [''],
    //         image: [null],
    //         description: [''],
    //         date: [''],
    //         address: [''],
    //         time: [''],
    //     })
    // }

    // onCreateBill() {
    //     const { title, ...rest } = this.addBillForm.value;

    //     const bill: Bill = {
    //         title,
    //         ...rest
    //     }


    //     this.billService.addBill(bill).subscribe(_ => {
    //         this.addBillForm.reset();
    //         this.toastr.success('You have successfully book a donation. Please check email for the confirmation', 'Success')
    //     })
    // }

    handleImageUpload(imageUrl: string) {
        this.newBill.image = imageUrl
    }


    handleImageError() {
        this.newBill.image = undefined
    }

    // // Get location
    // public getAddress() {
    //     if(this.query != "") {
    //         this.here.getAddress(this.query).then(result => {
    //             this.locations = <Array<any>>result;
    //         }, error => {
    //             console.error(error);
    //         });
    //     }
    // }


    // public getAddressFromLatLng() {
    //     if(this.position != "") {
    //         this.here.getAddressFromLatLng(this.position).then(result => {
    //             this.locations = <Array<any>>result;
    //         }, error => {
    //             console.error(error);
    //         });
    //     }
    // }
}