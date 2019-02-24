import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'searchText',
    pure: false
})
export class SearchTextPipe implements PipeTransform {

    transform(items: Array<any>, titleSearch: string, descriptionSearch: string, addressSearch: string, dateSearchFrom: string, dateSearchTo: string) {
        if (items && items.length) {
            return items.filter(item => {
                if (titleSearch && item.userName.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (descriptionSearch && item.description.toLowerCase().indexOf(descriptionSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (addressSearch && item.street.toLowerCase().indexOf(addressSearch.toLowerCase()) === -1) {
                    return false;
                }
                
                if (dateSearchFrom) {
                    let createdTime:number = moment(item.createdAt).valueOf();
                    let searchFromTime:number = moment(dateSearchFrom).valueOf();
                    let searchToTime:number = null;
                    if(dateSearchTo){
                        searchToTime = moment(dateSearchTo).valueOf();
                    }else{
                        searchToTime = moment().valueOf();
                    }
                    if(createdTime < searchFromTime || createdTime>searchToTime)
                        return false
                }
                return true;
            })
        }
        else {
            return items;
        }
    }
}


