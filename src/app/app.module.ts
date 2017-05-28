import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
import {RoutesModule} from "./app.routes";
import {ConversionComponent} from "./conversion.component";
import {FeedbackComponent} from "./feedback.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RoutesModule],
  declarations: [ AppComponent, ConversionComponent, FeedbackComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
