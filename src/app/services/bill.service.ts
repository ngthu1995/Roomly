import { Bill } from '../components/models/bill.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class BillService {
    private bill: Bill[] = [];
    private readonly rootUrl = 'http://localhost:3000/api/bill';
    private addBillSubject: Subject<Bill> = new Subject<Bill>();


    constructor(private httpClient: HttpClient) { }

    addBill(bill: Bill) {
        return this.httpClient
            .post<Bill>(this.rootUrl, bill, {
                headers: this.getHeaders()
            }).pipe(tap((data: Bill) => {
                this.addBillSubject.next(data)
            }))
    }

    createBill(bill: Bill): Observable<any> {
        return this.httpClient.post(this.rootUrl, bill)
    }

    get addBillSubject$(): Observable<Bill> {
        return this.addBillSubject.asObservable()
    }

    private getHeaders() {
        return { 'content-type': 'application/json' }
    }

    getManage(): Observable<any> {
        return this.httpClient.get(this.rootUrl)
    }

    getBills(): Observable<{ bills: Bill[] }> {
        return this.httpClient.get<{ manage: any }>(
            this.rootUrl
        )
            .pipe(map(billData => {
                return billData.manage.map(bill => {
                    return {
                        title: bill.title,
                        description: bill.description,
                        address: bill.address,
                        date: bill.date,
                        time: bill.time,
                        _id: bill._id
                    }

                })
            }))
    }



    // getBills(): Observable<any> {
    //     //   // //
    //     //   // const queryParams = `?pagesize=${usersPerPage}&page=${currentPage}`;
    //     return this.httpClient.get(this.rootUrl, { headers: this.getHeaders() });
    // }
}