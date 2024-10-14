import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule{ }

