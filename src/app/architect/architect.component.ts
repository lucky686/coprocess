import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'architect',
    templateUrl: './architect.component.html',
})
export class ArchitectComponent implements OnInit {
    responsibilities: any;
    constructor(private authService: AuthService) {

    }
    ngOnInit() {
        this.authService.getArchitectResponsibilities('getArchitectResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }
}
