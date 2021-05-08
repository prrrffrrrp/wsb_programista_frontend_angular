import { Component } from "@angular/core";

@Component({
    selector: 'wsb-page-not-found',
    template: `
        <h2 class="subtitle">Page Not Found</h2>
        <a routerLink="/">Go Home</a>
    `
})
export class PageNotFoundComponent {}
