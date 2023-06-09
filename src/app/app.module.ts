import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photo.module';

import { CoreModule } from "./core/core.module";
import { ErrorsModule } from './errors/errors.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        PhotosModule,
        CoreModule,
        ErrorsModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
