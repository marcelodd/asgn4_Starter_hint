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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var MyRemoteService = (function () {
    function MyRemoteService(http) {
        this.http = http;
        this.site = "http://ssdsandbox.com/angular2/";
    }
    // GET temperature in Celsius.
    MyRemoteService.prototype.getCelsius = function () {
        var content = new http_1.URLSearchParams();
        content.set('f', '32');
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({
            search: content
        });
        var dataUrl = this.site + 'api/Celsius';
        return this.http.get(dataUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // GET temperature in Fahrenheit.
    MyRemoteService.prototype.getFahrenheit = function () {
        var content = new http_1.URLSearchParams();
        content.set('c', '0');
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({
            search: content
        });
        var dataUrl = this.site + 'api/Fahrenheit';
        return this.http.get(dataUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // POST 
    MyRemoteService.prototype.postName = function (_feedback) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        var url = this.site + 'api/Feedback';
        var params = new http_1.URLSearchParams();
        var content = new http_1.URLSearchParams();
        content.set('Email', _feedback["Email"]);
        content.set('Message', _feedback["Message"]);
        return this.http.post(url, content.toString(), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // Retreival of JSON from .NET is a success.
    MyRemoteService.prototype.extractData = function (res) {
        var body = res.json();
        return JSON.parse(body) || {};
    };
    // An error occurred. Notify the user.
    MyRemoteService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    return MyRemoteService;
}());
MyRemoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_2.Http])
], MyRemoteService);
exports.MyRemoteService = MyRemoteService;
//# sourceMappingURL=app.myremoteservice.js.map