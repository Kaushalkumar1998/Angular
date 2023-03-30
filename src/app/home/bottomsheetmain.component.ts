import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
    selector: 'app-bottomsheetmain',
    templateUrl: 'bottomsheetmain.component.html',

})

export class bottomsheetmainComponent {
    constructor(private _bottomSheetRef: MatBottomSheetRef<bottomsheetmainComponent>) { }

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}