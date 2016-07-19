import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;


    constructor() {
        this.jbtHeading = "Some heading stuff";
        this.jbtText = "This is a template for a simple marketing or informational website";
        this.jbtBtnText = "click me";
        this.jbtBtnUrl = "http://test.com";

    }
}