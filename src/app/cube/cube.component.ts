import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// interface Car {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent {
  // selectedCar: string;
  // cars: Car[] = [
  //   { value: 'volvo', viewValue: 'Volvo' },
  //   { value: 'saab', viewValue: 'Saab' },
  //   { value: 'mercedes', viewValue: 'Mercedes' },
  // ];
  hide = true;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });


  onSubmit() {
    console.warn(this.profileForm.value);
  }










}

  // addresult() {
  //   var theData = {
  //     foo: "bar"
  //   };
  //   var theJSON = JSON.stringify(theData);
  //   var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);

  //   var a = document.createElement('a');
  //   a.href = uri;
  //   a.innerHTML = "Right-click and choose 'save as...'";
  //   document.body.appendChild(a);
  // }

