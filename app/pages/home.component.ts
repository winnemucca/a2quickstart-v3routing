/**
 * Created by steven.kauyedauty on 7/18/16.
 */
import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    private projectName:string;

    constructor() {
        this.projectName = "HomePage";
    }
}