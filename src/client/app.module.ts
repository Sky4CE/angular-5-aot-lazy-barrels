import {enableProdMode, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule, Title} from '@angular/platform-browser';
import {routing} from './app.router';
import {HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';

if (process.env.ENV !== 'development') {
    enableProdMode();
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        routing,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule.forRoot()
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}
