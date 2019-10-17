import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html'
})
export class ManagerComponent implements OnInit {
    responsibilities: any;
    constructor(private authService: AuthService) {

    }
    ngOnInit() {

        this.authService.getManagerResponsibilities('getAllManagerResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }
}