import { Component } from "@angular/core";



@Component({
    selector: "app-badges",
    templateUrl: "./badges.component.html",
    styleUrls: ['./autocomplete.component.scss']
})


export class BadgesComponent {

    hidden: boolean = false;


    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
}