import { Component }      from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
    selector: 'my-app',
    template: `
        <div><a [routerLink]="['home']">Home</a> | <a [routerLink]="['feedback']">Feedback</a></div>
        
        <router-outlet></router-outlet>
                `,
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class AppComponent {
    names: Array<any>;
    remoteService: MyRemoteService;
    emailAddress: string;
    feedbackMsg: string;
    feedbackResponseMsg: string;
    feedbackResponseStatus: string;

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
    }

    convertToC() {

    }

    convertToF() {
        this.remoteService.getFahrenheit()
            // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.names = data
                    console.log(JSON.stringify(data))
                    let x = data["Fahrenheit"];
                    let y = 0;
                },
                // Error.
                error => {
                    alert(error)
                },
                // Final Instructions.
                () => {
                    console.log("Finished")
                });
    }

    postFeedback() {  
        // Create the JavaScript object in the format
        // required by the server.
        let FeedBackObject = {
            "Email": this.emailAddress,
            "Message": this.feedbackMsg
        }

        this.remoteService.postName(FeedBackObject)
            // Subscribe to observable.
            .subscribe(

            // Success.
            data => {
                this.feedbackResponseMsg    = data["Message"];
                this.feedbackResponseStatus = data["Status"];
                console.log(data)
            },
            // Error.
            error => {
                alert(error)
            },
            // Final instructions.
            () => {
                console.log("Finished")
            });
    }
}
