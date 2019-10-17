import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-devteam',
    templateUrl: './devteam.component.html'
})
export class DevTeamComponent implements OnInit {
    fileUrl: any;
    responsibilities: any;
    constructor(private authService: AuthService) {

    }
    ngOnInit() {

        this.authService.getDevTeamResponsibilities('getDevTeamResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }

}