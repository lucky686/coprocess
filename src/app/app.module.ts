import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RoleCategoriesComponent } from './role-categories/role-categories.component';
import { RoleCategoriesListComponent } from './role-categories-list/role-categories-list.component';
import { ArchitectComponent } from './architect/architect.component';
import { ManagerComponent } from './manager/manager.component';
import { DevTeamComponent } from './devteam/devteam.component';
import { QAComponent } from './qa/qa.component';
import { AppComponent } from './app.component';
import { ScrumMasterComponent } from './scrummaster/scrummaster.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ProductOwnerComponent } from '../app/product-owner/product-owner.component';
import { PeopleComponent } from '../app/people/people.component';
import { ProcessComponent } from '../app/process/process.component';
import { ToolsComponent } from '../app/tools/tools.component';
// import {  } from '../app/people/people.component';
import { RoleCategoriesFlowChartComponent } from './role-categories-list/role-categories-flowchart';
import { AuthGuard } from './auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CheckComponent } from '../app/check/check.component';


@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, RouterModule.forRoot([
        { path: '', component: RoleCategoriesComponent },
         { path: 'jumpstart1/:id/:name', component: RoleCategoriesFlowChartComponent,
         children: [
          {path: 'jumpstart/:id/:name', component: RoleCategoriesListComponent },
         { path: 'people/:id/:name', component: PeopleComponent},
         { path: 'process/:id/:name', component: ProcessComponent },
         { path: 'tools/:id/:name', component: ToolsComponent },
        ]},

        // { path: 'people/:id/:name', component: PeopleComponent},
        { path: 'Product Owner', component: ProductOwnerComponent },
        { path: 'Architect', component: ArchitectComponent },
        { path: 'Manager', component: ManagerComponent },
        { path: 'Dev Team', component: DevTeamComponent },
        { path: 'QA', component: QAComponent },
        { path: 'Scrum Master', component: ScrumMasterComponent },
// { path: 'process', component: ProcessComponent },
    ]),
        // tslint:disable-next-line: deprecation
        MaterialModule, HttpModule, HttpClientModule],
    // tslint:disable-next-line: max-line-length
    declarations: [AppComponent, RoleCategoriesComponent, RoleCategoriesListComponent, ProductOwnerComponent, ArchitectComponent, ManagerComponent, DevTeamComponent, QAComponent, ScrumMasterComponent, RoleCategoriesFlowChartComponent, PeopleComponent, ProcessComponent, ToolsComponent, CheckComponent],
    bootstrap: [AppComponent],
    providers: [AuthService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
