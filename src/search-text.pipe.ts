import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchText',
    pure: false
})
export class SearchTextPipe implements PipeTransform {

    transform(items: Array<any>, titleSearch: string, descriptionSearch: string, addressSearch: string,
        appSearch: string, managerSearch: string, locationSearch: string) {
        if (items && items.length) {
            return items.filter(item => {
                if (titleSearch && item.name.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (descriptionSearch && item.role.toLowerCase().indexOf(descriptionSearch.toLowerCase()) === -1) {
                    return false;
                }
                if (addressSearch && item.company.toLowerCase().indexOf(addressSearch.toLowerCase()) === -1) {
                    return false;
                }
                return true;
            })
        }
        else {
            return items;
        }
    }
}


