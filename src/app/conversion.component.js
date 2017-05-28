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
var app_myremoteservice_1 = require("./app.myremoteservice");
// This component consumes the re-usable service.
var ConversionComponent = (function () {
    function ConversionComponent(_remoteService) {
        this.remoteService = _remoteService;
    }
    ConversionComponent.prototype.convertToC = function () {
        var _this = this;
        this.remoteService.getCelsius()
            .subscribe(
        // Success.
        function (data) {
            _this.resultCelsius = data['Celsius'];
        }, 
        // Error.
        function (error) {
            alert(error);
        }, 
        // Final Instructions.
        function () {
            console.log('Finished');
        });
    };
    ConversionComponent.prototype.convertToF = function () {
        var _this = this;
        this.remoteService.getFahrenheit()
            .subscribe(
        // Success.
        function (data) {
            _this.resultFahreheit = data['Fahrenheit'];
        }, 
        // Error.
        function (error) {
            alert(error);
        }, 
        // Final Instructions.
        function () {
            console.log('Finished');
        });
    };
    return ConversionComponent;
}());
ConversionComponent = __decorate([
    core_1.Component({
        selector: 'app-conversion',
        template: "\n        Convert Celsius to Fahrenheit: \n        <input type=\"number\" [(ngModel)]=\"celsius\" (click)=\"resultFahreheit = null\"> <button (click)=\"convertToF()\">Get Fahrenheit</button>\n        <div *ngIf=\"resultFahreheit\" style=\"color: green\">\n            {{celsius}} Degrees Celsius is {{resultFahreheit}} Degrees Fahrenheit.\n        </div>\n        <hr>\n        Convert Fahreheit to Celsius:  \n        <input type=\"number\" [(ngModel)]=\"fahreheit\" (click)=\"resultCelsius = null\"> <button (click)=\"convertToC()\">Get Celsius</button>\n        <div *ngIf=\"resultCelsius\" style=\"color: green\">{{fahreheit}} Degrees Fahreheit is {{resultCelsius}} Degrees Celsius.</div>\n                ",
        // Providers allow us to inject an object instance through the constructor.
        providers: [app_myremoteservice_1.MyRemoteService]
    }),
    __metadata("design:paramtypes", [app_myremoteservice_1.MyRemoteService])
], ConversionComponent);
exports.ConversionComponent = ConversionComponent;
//# sourceMappingURL=conversion.component.js.map