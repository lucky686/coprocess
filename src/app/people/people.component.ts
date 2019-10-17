import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute, Params  } from '@angular/router';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  id: number;
  paramsSub: any;
  peoples: any[];
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
        this.peoples = data.peoples;
        console.log(data);
        console.log(this.peoples);
    });
}
}

