/**
 * Created by steven.kauyedauty on 7/17/16.
 */
import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class AboutComponent {
    private projectName:string;

    constructor() {
        this.projectName = "mywebsite";
    }
}