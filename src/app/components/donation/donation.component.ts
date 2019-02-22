import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillService } from '../../services/bill.service';
import { Bill } from '../models/bill.model';
import { SelectOption, timeOptions } from './constants';
import { ToastrService } from 'ngx-toastr'
@Component({
    selector: 'app-donation',
    templateUrl: './donation.component.html',
    styleUrls: ['./donation.component.css']
})

export class DonationComponent implements OnInit {

    addBillForm: FormGroup;
    newBill: Bill
    constructor(private formBuilder: FormBuilder,
        private billService: BillService,
        private toastr: ToastrService) { }

    timeFormOptions = timeOptions
    ngOnInit() {
        // this.initForm()

        this.newBill = new Bill();

    }

    createBill(){
        this.billService.createBill(this.newBill).subscribe(
            (bill: Bill) => {
                this.toastr.success('You have successfully book a donation. Please check email for the confirmation', 'Success')            }
        )
    }
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
}