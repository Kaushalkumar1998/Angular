import { Component } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  canEdit = false;
  message = "I am Read Only";

  onEditClick() {
    this.canEdit = !this.canEdit;

    if (this.canEdit) {
      this.message = 'you can edit me';
    }
    else {
      this.message = "I am read only"
    }

  }
}
