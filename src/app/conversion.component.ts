import { Component }      from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
    selector: 'app-conversion',
    template: `
        Convert Celsius to Fahrenheit: 
        <input type="number" [(ngModel)]="celsius" (click)="resultFahreheit = null"> <button (click)="convertToF()">Get Fahrenheit</button>
        <div *ngIf="resultFahreheit" style="color: green">
            {{celsius}} Degrees Celsius is {{resultFahreheit}} Degrees Fahrenheit.
        </div>
        <hr>
        Convert Fahreheit to Celsius:  
        <input type="number" [(ngModel)]="fahreheit" (click)="resultCelsius = null"> <button (click)="convertToC()">Get Celsius</button>
        <div *ngIf="resultCelsius" style="color: green">{{fahreheit}} Degrees Fahreheit is {{resultCelsius}} Degrees Celsius.</div>
                `,
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class ConversionComponent {
    remoteService: MyRemoteService;
    celsius: number;
    fahreheit: number;
    resultFahreheit: number;
    resultCelsius: number;

    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
    }

    convertToC() {
        this.remoteService.getCelsius()
        // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.resultCelsius = data['Celsius'];
                },
                // Error.
                error => {
                    alert(error);
                },
                // Final Instructions.
                () => {
                    console.log('Finished');
                });
    }

    convertToF() {
        this.remoteService.getFahrenheit()
            // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.resultFahreheit = data['Fahrenheit'];
                },
                // Error.
                error => {
                    alert(error);
                },
                // Final Instructions.
                () => {
                    console.log('Finished');
                });
    }

}
