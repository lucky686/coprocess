"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
var router_1 = require("@angular/router");
var RoleCategoriesListComponent = /** @class */ (function () {
    function RoleCategoriesListComponent(authService, activatedRoute, router) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isCollapsed = false;
    }
    RoleCategoriesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.linkName = params['name'];
        });
        this.getLinkData();
    };
    RoleCategoriesListComponent.prototype.getLinkData = function () {
        var _this = this;
        this.authService.getLinkData('getLinksByLinkId', this.id).subscribe(function (linkInfo) {
            var data = linkInfo.collection[0];
            _this.peoples = data.peoples;
            _this.processes = data.processes;
            _this.tools = data.tools;
            console.log(data);
            console.log(_this.peoples);
            console.log(_this.processes);
            console.log(_this.tools);
        });
    };
    RoleCategoriesListComponent = __decorate([
        core_1.Component({
            selector: 'role-categories-list',
            templateUrl: './role-categories-list.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.ActivatedRoute,
            router_1.Router])
    ], RoleCategoriesListComponent);
    return RoleCategoriesListComponent;
}());
exports.RoleCategoriesListComponent = RoleCategoriesListComponent;
//# sourceMappingURL=role-categories-list.component.js.map