import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'product-owner',
    templateUrl: './product-owner.component.html'
})
export class ProductOwnerComponent implements OnInit {

    responsibilities: any;
    constructor(private authService: AuthService) {

    }
    ngOnInit() {
        this.authService.getProductOwnerResponsibilities('getAllProductOwnerResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);

            });
    }
}
