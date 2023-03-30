import { Component } from "@angular/core";
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { bottomsheetmainComponent } from "./bottomsheetmain.component";



@Component({
    selector: "app-bootomsheet",
    templateUrl: "./bottomsheet.component.html",
    styleUrls: ['./autocomplete.component.scss']
})

export class BottomsheetComponent {

    constructor(private _bottomSheet: MatBottomSheet) { }

    openBottomSheet(): void {
        this._bottomSheet.open(bottomsheetmainComponent);
    }
}