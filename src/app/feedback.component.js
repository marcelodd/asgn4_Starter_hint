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
var FeedbackComponent = (function () {
    function FeedbackComponent(_remoteService) {
        this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.remoteService = _remoteService;
    }
    FeedbackComponent.prototype.postFeedback = function () {
        // Create the JavaScript object in the format
        // required by the server.
        var _this = this;
        this.feedbackError = '';
        this.emailError = '';
        if (!this.emailAddress || this.emailAddress === '') {
            this.emailError = 'Email is required';
            return;
        }
        else if (!this.feedbackMsg || this.feedbackMsg === '') {
            this.feedbackError = 'Feedback is required';
            return;
        }
        else if (!this.EMAIL_REGEXP.test(this.emailAddress)) {
            this.emailError = 'Email invalid';
            return;
        }
        var FeedBackObject = {
            'Email': this.emailAddress,
            'Message': this.feedbackMsg
        };
        this.remoteService.postName(FeedBackObject)
            .subscribe(
        // Success.
        function (data) {
            _this.feedbackResponseMsg = data['Message'];
            _this.feedbackResponseStatus = data['Status'];
            _this.emailAddress = '';
            _this.feedbackMsg = '';
        }, 
        // Error.
        function (error) {
            alert(error);
        }, 
        // Final instructions.
        function () {
            console.log('Finished');
        });
    };
    return FeedbackComponent;
}());
FeedbackComponent = __decorate([
    core_1.Component({
        selector: 'app-feedback',
        template: "\n\n        <div style=\"padding: 15px;\">\n            <!-- Submit feedback -->\n            Email:<br/>\n            <div *ngIf=\"emailError\" style=\"color: red;\">{{emailError}}</div>\n            <input [(ngModel)]=\"emailAddress\" (click)=\"emailAddress = ''\"><br/><br/>\n\n            Feedback:<br/>\n            <div *ngIf=\"feedbackError\" style=\"color: red;\">{{feedbackError}}</div>\n            <input [(ngModel)]=\"feedbackMsg\" (click)=\"feedbackMsg = ''\"><br/><br/>\n\n            <button (click)=\"postFeedback()\">Submit Feedback</button>\n\n            <!-- Show result from Post -->\n            <div *ngIf=\"feedbackResponseMsg\">{{feedbackResponseMsg}}<br/>\n                {{feedbackResponseStatus}}\n            </div>\n        </div>\n    ",
        // Providers allow us to inject an object instance through the constructor.
        providers: [app_myremoteservice_1.MyRemoteService]
    }),
    __metadata("design:paramtypes", [app_myremoteservice_1.MyRemoteService])
], FeedbackComponent);
exports.FeedbackComponent = FeedbackComponent;
//# sourceMappingURL=feedback.component.js.map