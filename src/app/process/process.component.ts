import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  id: number;
  paramsSub: any;
  processes: any[];
  linkName: string;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
              private router: Router) { }

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
        this.processes = data.processes;
        console.log(data);
        console.log(this.processes);
    });
}
}
