import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillService } from '../../services/bill.service';
import { Bill } from '../models/bill.model';
import { SelectOption, timeOptions } from './constants';


@Component({
    selector: 'app-donation',
    templateUrl: './donation.component.html',
    styleUrls: ['./donation.component.css']
})

export class DonationComponent implements OnInit {

    addBillForm: FormGroup;
    newBill: Bill
    constructor(private formBuilder: FormBuilder,
        private billService: BillService) { }

    timeFormOptions = timeOptions
    ngOnInit() {
        this.initForm()
    }

    private initForm() {
        this.addBillForm = this.formBuilder.group({
            title: [''],
            image: [''],
            description: [''],
            date: [''],
            address: [''],
            time: ['']
        })
    }

    onCreateBill() {
        const { title, ...rest } = this.addBillForm.value;

        const bill: Bill = {
            title,
            ...rest
        }

        this.billService.addBill(bill).subscribe(_ => {
            console.log(bill)
        })
    }
}