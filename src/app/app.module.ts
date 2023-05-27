import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photo.module';

import { HomeModule } from './home/home.module';
import { CoreModule } from "./core/core.module";



@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PhotosModule,
        HomeModule,
        CoreModule
    ]
})
export class AppModule { }
