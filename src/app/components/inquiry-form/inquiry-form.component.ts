import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms

@Component({
  selector: 'app-inquiry-form',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.css'] 
})
export class InquiryFormComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  artName: string = '';
  inquiry: string = '';

  submitInquiry() {
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      artName: this.artName,
      inquiry: this.inquiry
    });
  }
}