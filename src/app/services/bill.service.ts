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


    // addBill
    addBill(bill: Bill) {
        return this.httpClient
            .post<Bill>(this.rootUrl, bill, {
                headers: this.getHeaders()
            }).pipe(tap((data: Bill) => {
                this.addBillSubject.next(data)
            }))
    }


    // Create bill
    createBill(bill: Bill): Observable<any> {
        return this.httpClient.post(this.rootUrl, bill)
    }

    getManage(): Observable<any> {
        return this.httpClient.get(this.rootUrl)
    }

    get addBillSubject$(): Observable<Bill> {
        return this.addBillSubject.asObservable()
    }

    private getHeaders() {
        return { 'content-type': 'application/json' }
    }



    getBills(): Observable<{ bills: Bill[] }> {
        return this.httpClient.get<{ bill: any }>(
            this.rootUrl
        )
            .pipe(map(billData => {
                console.log(billData)
                return {
                    bills: billData.bill.map(bill => {
                        console.log(billData.bill)
                        return {
                            userName: bill.userName,
                            description: bill.description,
                            address: bill.address,
                            date: bill.date,
                            time: bill.time,

                            _id: bill._id
                        }

                    })
                }
            }))
    }

    fetchApi() {
        return this.httpClient.get('https://geocoder.api.here.com/6.2/geocode.json');
    }

    public getPostById(postId: string): Observable<any> {
        console.log(postId)
        return this.httpClient.get(`http://localhost:3000/api/bill/${postId}`)
    }


    // getBills(): Observable<any> {
    //     //   // //
    //     //   // const queryParams = `?pagesize=${usersPerPage}&page=${currentPage}`;
    //     return this.httpClient.get(this.rootUrl, { headers: this.getHeaders() });
    // }
}