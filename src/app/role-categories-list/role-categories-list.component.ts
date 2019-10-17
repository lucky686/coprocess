import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
// import { EventEmitter } from 'events';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'role-categories-list',
    templateUrl: './role-categories-list.html'
})
export class RoleCategoriesListComponent implements OnInit {
    public isCollapsed = false;
    id: number;
    paramsSub: any;
    peoples: any[];
    processes: any[];
    tools: any[];
    linkName: string;
    // @Input() myevent: any;
    constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
                private router: Router) {
    }
    linkData: any[];
    ngOnInit() {

        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params.id;
            this.linkName = params.name;
        });
        this.getLinkData();
    }

    getLinkData(): void {
        this.authService.getLinkData('getLinksByLinkId', this.id).subscribe(linkInfo => {
            const data = linkInfo.collection[0];
            this.peoples = data.peoples;
            this.processes = data.processes;
            this.tools = data.tools;
            console.log(data);
            console.log(this.peoples);
            console.log(this.processes);
            console.log(this.tools);
        });
    }
}
