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
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService(httpService) {
        this.httpService = httpService;
        this.apiUrl = "http://192.168.29.99:8080/api/values/";
    }
    AuthService.prototype.getRoles = function (url) {
        return this.httpService.get(this.apiUrl + "/" + url)
            .pipe(operators_1.catchError(this.handleError));
    };
    AuthService.prototype.getLinks = function (url) {
        return this.httpService.get(this.apiUrl + "/" + url).pipe(operators_1.catchError(this.handleError));
    };
    AuthService.prototype.getLinkData = function (url, id) {
        var newurl = "" + (this.apiUrl + "/" + url + "/" + id);
        return this.httpService.get(newurl).pipe(operators_1.catchError(this.handleError));
    };
    AuthService.prototype.getProductOwnerResponsibilities = function (url) {
        return this.httpService.get(this.apiUrl + "/" + url)
            .pipe(operators_1.catchError(this.handleError));
    };
    AuthService.prototype.getArchitectResponsibilities = function (url) {
        return this.httpService.get(this.apiUrl + "/" + url)
            .pipe(operators_1.catchError(this.handleError));
    };
    AuthService.prototype.getManagerResponsibilities = function (url) {
        return this.httpService.get(this.apiUrl + "/" + url)
            .pipe(operators_1.catchError(this.handleError));
    };
    AuthService.prototype.getDevTeamResponsibilities = function (url) {
        return this.httpService.get(this.apiUrl + "/" + url)
            .pipe(operators_1.catchError(this.handleError));
    };
    AuthService.prototype.getQAResponsibilities = function (url) {
        return this.httpService.get(this.apiUrl + "/" + url)
            .pipe(operators_1.catchError(this.handleError));
    };
    AuthService.prototype.getScrumMasterResponsibilities = function (url) {
        return this.httpService.get(this.apiUrl + "/" + url)
            .pipe(operators_1.catchError(this.handleError));
    };
    AuthService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return rxjs_1.throwError('Something bad happened; please try again later.');
    };
    ;
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map