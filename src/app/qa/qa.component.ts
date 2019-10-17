import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-qa',
    templateUrl: './qa.component.html'
})
export class QAComponent implements OnInit {
    responsibilities: any;
    constructor(private authService: AuthService) {

    }
    ngOnInit() {
        this.authService.getQAResponsibilities('getAllQAResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }
}