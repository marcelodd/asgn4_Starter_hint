import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ConversionComponent} from './conversion.component';
import {FeedbackComponent} from './feedback.component';

export const routes: Routes = [
    {path: '', component: ConversionComponent},
    { path: 'home', component: ConversionComponent },
    { path: 'feedback', component: FeedbackComponent }
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);
