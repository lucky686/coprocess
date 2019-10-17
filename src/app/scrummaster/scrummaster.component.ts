import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'Scrum-Master',
    templateUrl: './scrummaster.component.html'
})
export class ScrumMasterComponent implements OnInit {
    fileUrl: any;
    responsibilities: any;

    constructor(private authService: AuthService) {

    }
    ngOnInit() {
        this.authService.getScrumMasterResponsibilities('getAllScrumMasterResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }
}

