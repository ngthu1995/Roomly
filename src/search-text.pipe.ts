import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchText',
    pure: false
})
export class SearchTextPipe implements PipeTransform {

    transform(items: Array<any>, titleSearch: string, descriptionSearch: string, addressSearch: string, dateSearch: string) {
        if (items && items.length) {
            return items.filter(item => {
                if (titleSearch && item.title.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (descriptionSearch && item.description.toLowerCase().indexOf(descriptionSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (addressSearch && item.address.toLowerCase().indexOf(addressSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (dateSearch && item.date.toLowerCase().indexOf(dateSearch.toLowerCase()) === -1) {
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


