import {Component}      from '@angular/core';
import {MyRemoteService} from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
    selector: 'app-feedback',
    template: `

        <div style="padding: 15px;">
            <!-- Submit feedback -->
            Email:<br/>
            <div *ngIf="emailError" style="color: red;">{{emailError}}</div>
            <input [(ngModel)]="emailAddress" (click)="emailAddress = ''"><br/><br/>

            Feedback:<br/>
            <div *ngIf="feedbackError" style="color: red;">{{feedbackError}}</div>
            <input [(ngModel)]="feedbackMsg" (click)="feedbackMsg = ''"><br/><br/>

            <button (click)="postFeedback()">Submit Feedback</button>

            <!-- Show result from Post -->
            <div *ngIf="feedbackResponseMsg">{{feedbackResponseMsg}}<br/>
                {{feedbackResponseStatus}}
            </div>
        </div>
    `,
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class FeedbackComponent {
    names: Array<any>;
    remoteService: MyRemoteService;
    emailAddress: string;
    feedbackMsg: string;
    feedbackResponseMsg: string;
    feedbackResponseStatus: string;
    feedbackError: string;
    emailError: string;

     EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
    }

    postFeedback() {
        // Create the JavaScript object in the format
        // required by the server.

        this.feedbackError = '';
        this.emailError = '';

        if (!this.emailAddress || this.emailAddress === '') {
            this.emailError = 'Email is required';
            return;
        }
        else if (!this.feedbackMsg || this.feedbackMsg === '') {
            this.feedbackError = 'Feedback is required';
            return;
        }else if(!this.EMAIL_REGEXP.test(this.emailAddress)){
            this.emailError = 'Email invalid';
            return;
        }


        let FeedBackObject = {
            'Email': this.emailAddress,
            'Message': this.feedbackMsg
        };

        this.remoteService.postName(FeedBackObject)
        // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.feedbackResponseMsg = data['Message'];
                    this.feedbackResponseStatus = data['Status'];
                    this.emailAddress = '';
                    this.feedbackMsg = '';
                },
                // Error.
                error => {
                    alert(error);
                },
                // Final instructions.
                () => {
                    console.log('Finished');
                });
    }
}
