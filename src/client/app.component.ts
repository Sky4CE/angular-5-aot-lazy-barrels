import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `
      <div>
        <a routerLink="/">home</a>
        <a routerLink="/routes/lazy">lazy</a>
  	    <router-outlet (activate)="onActivate($event)"></router-outlet>

    </div>`
})

export class AppComponent {
    onActivate(ev: any) {
        console.log('Route activated ', ev);
    }
}

