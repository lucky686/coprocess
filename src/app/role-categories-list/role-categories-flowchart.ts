import { Component, NgModule, VERSION, OnInit, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { RoleCategoriesListComponent } from './role-categories-list.component';
declare var flowchart: any;
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'role-categories-flowchart',
  templateUrl: './role-categories-flowchart.html',
  styleUrls: ['./role-categories-flowchart.css']
})
export class RoleCategoriesFlowChartComponent implements OnInit, OnChanges {
  id: number;
  paramsSub: any;
  linkName: string;
  url: string;
  isHide = false;
  showChild1 = false;

  constructor(private activatedRoute: ActivatedRoute,
    // tslint:disable-next-line: align
    private router: Router) {

  }

  ngOnInit() {
    this.isHide = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params[' id '];
      this.linkName = params[' name '];
    });
    const self = this;
    setTimeout(() => {
      const a = document.querySelectorAll('#canvas a');
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < a.length; i++) {
          const k = a[i];
          const link = k.getAttribute('href');
          // console.log('start');
          // console.log(link);
          // console.log('start');
          // tslint:disable-next-line: only-arrow-functions
          a[i].addEventListener('click', function(event) {
event.preventDefault();
// this.isHide ='true';
self.router.navigate([link]);
         });
}
// st=>start:' + ' <a class="btn btn-success" [routerLink]="[/jumpstart,this.id,this.linkName]">Start</a> \n\
    }, 1000);
    this.url = 'http://192.168.29.81:81/jumpstart1/' + this.id + '/' + this.linkName;
    // console.log(this.url);
    // 'st=>start: Start|past:>http://192.168.29.99:81/jumpstart/1/Jump%20Start
    // tslint:disable-next-line: no-unused-expression
    const roue = 'jumpstart/:id/:name';
    // tslint:disable-next-line: one-variable-per-declaration
    const content = 'st=>start: Start:>[<a [routerLink]="[/jumpstart,this.id,this.linkName]"></a>]\n\
        cond=>condition: App Modreization:>/jumpstart1/1/Jump%20Start/jumpstart/1/Jump%20Start \n\
        tf=>operation: Target First:>/jumpstart1/1/Jump%20Start/people/1/Jump%20Start \n\
        cp=>operation: Capture:>/jumpstart1/1/Jump%20Start/process/1/Jump%20Start \n\
        anly=>subroutine: Analyze:>http://192.168.29.81:4200/#/jumpstart/1/Jump%20Start\n\
        trns=>subroutine: translate:>http://192.168.29.81:4200/#/jumpstart/1/Jump%20Start \n\
        pb=>operation: Product Backlog:>http://192.168.29.81:4200/#/jumpstart/1/Jump%20Start \n\
        aa=>operation: Architectural Artifact:>http://192.168.29.81:4200/#/jumpstart/1/Jump%20Start \n\
        func=>parallel: Functionality \n\
        c1=>condition: Arche Type|approved \n\
        one=>operation: 1.0 or Concierge or Wizard Of Oz|rejected \n\
        es=>operation: Estimations \n\
        rm=>operation: Road Map|current \n\
        st->cond(no)->tf \n\
    tf->cp(right)->anly \n\
    anly->trns(right) \n\
    cp->pb \n\
    pb->aa \n\
    aa->c1 \n\
   c1(yes)->one \n\
   one->es \n\
    es->rm';
    const chart = flowchart.parse(content);
    chart.drawSVG('canvas', {
      // 'x': 30,
      // 'y': 50,
      'line-width': 3,
      'line-length': 50,
      'text-margin': 10,
      'font-size': 14,
      font: 'normal',
      'font-family': 'Helvetica',
      'font-weight': 'normal',
      'font-color': 'black',
      'line-color': 'black',
      'element-color': 'black',
      fill: 'white',
      'yes-text': 'yes',
      'no-text': 'no',
      'arrow-end': 'block',
      symbols: {
        start: {
          'font-color': 'red',
          'element-color': 'green',
          fill: 'yellow',
          // click(): any { this.isHide = true; }
          dostuff(): any {alert(5); }
        },
        end: {
          class: 'end-element'
        }
      },
      flowstate: {
        past: {
          fill: '#CCCCCC',
          'font-size': 12
        },
        current: {
          fill: 'yellow',
          'font-color': 'red',
          'font-weight': 'bold'
        },
        future: {
          fill: '#FFFF99'
        },
        request: {
          fill: 'blue'
        },
        invalid: {
          fill: '#444444'
        },
        approved: {
          fill: '#58C4A3',
          'font-size': 12,
          'yes-text': 'APPROVED',
          'no-text': 'n/a'
        },
        rejected: {
          fill: '#C45879',
          'font-size': 12,
          'yes-text': 'n/a',
          'no-text': 'REJECTED'
        }

      }
    });
  }
  loadMyChildComponent(): any {
this.showChild1 = true;
  }
 ngOnChanges() {
//     setTimeout(() => {
//       const a = document.querySelectorAll('#canvas a');
//       for (let i = 0; i < a.length; i++) {
//           const k = a[i];
//           const link = k.getAttribute('href');
//           a[i].addEventListener('click', function(event) {
// event.preventDefault();
//            // document.getElementById("demo").innerHTML = "Hello World";
// this.isHide = true;
//           });
// }
// //  st=>start:' + ' <a class="btn btn-success" [routerLink]="[/jumpstart,this.id,this.linkName]">Start</a> \n\
//     }, 1000);
  }
}
