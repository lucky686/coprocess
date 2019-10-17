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
var platform_browser_1 = require("@angular/platform-browser");
var ScrumMasterComponent = /** @class */ (function () {
    function ScrumMasterComponent(authService, sanitizer) {
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.url = '/src/assets/documents';
    }
    ScrumMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = 'some text';
        var blob = new Blob([data], { type: 'application/octet-stream' });
        //this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        this.authService.getScrumMasterResponsibilities('getAllScrumMasterResponsibilities')
            .subscribe(function (responsibilities) {
            _this.responsibilities = responsibilities.collection;
            console.log(_this.responsibilities);
        });
    };
    ScrumMasterComponent = __decorate([
        core_1.Component({
            selector: 'Scrum-Master',
            templateUrl: './Scrum-Masterr.component.html',
            styleUrls: ['./Scrum-Master.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, platform_browser_1.DomSanitizer])
    ], ScrumMasterComponent);
    return ScrumMasterComponent;
}());
exports.ScrumMasterComponent = ScrumMasterComponent;
//getProductOwnerResponsibilities(): void {
//    this.authService.getProductOwnerResponsibilities('getAllProductOwnerResponsibilities')
//        .subscribe(responsibilities => {
//            this.responsibilities = responsibilities.collection;
//            console.log(this.responsibilities);
//        });
//}
//}
//# sourceMappingURL=scrum master.component.js.map