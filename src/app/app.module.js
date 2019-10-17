"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var role_categories_component_1 = require("./role-categories/role-categories.component");
var role_categories_list_component_1 = require("./role-categories-list/role-categories-list.component");
var architect_component_1 = require("./architect/architect.component");
var manager_component_1 = require("./manager/manager.component");
var devteam_component_1 = require("./devteam/devteam.component");
var qa_component_1 = require("./qa/qa.component");
var app_component_1 = require("./app.component");
var scrummaster_component_1 = require("./scrummaster/scrummaster.component");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
//import { MatExpansionModule } from '@angular/material';
//import { MatListModule } from '@angular/material/list';
var auth_service_1 = require("./auth.service");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var material_module_1 = require("./material.module");
var product_owner_component_1 = require("../app/product-owner/product-owner.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, app_routing_module_1.AppRoutingModule, router_1.RouterModule.forRoot([
                    { path: '', component: role_categories_component_1.RoleCategoriesComponent },
                    { path: 'jumpstart1/:id/:name', component: role_categories_list_component_1.RoleCategoriesListComponent },
                    { path: 'Product Owner', component: product_owner_component_1.ProductOwnerComponent },
                    { path: 'Architect', component: architect_component_1.ArchitectComponent },
                    { path: 'Manager', component: manager_component_1.ManagerComponent },
                    { path: 'Dev Team', component: devteam_component_1.DevTeamComponent },
                    { path: 'QA', component: qa_component_1.QAComponent },
                    { path: 'Scrum Master', component: scrummaster_component_1.ScrumMasterComponent },
                ]),
                material_module_1.MaterialModule, http_1.HttpModule, http_2.HttpClientModule],
            declarations: [app_component_1.AppComponent, role_categories_component_1.RoleCategoriesComponent, role_categories_list_component_1.RoleCategoriesListComponent, product_owner_component_1.ProductOwnerComponent, architect_component_1.ArchitectComponent, manager_component_1.ManagerComponent, devteam_component_1.DevTeamComponent, qa_component_1.QAComponent, scrummaster_component_1.ScrumMasterComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [auth_service_1.AuthService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
