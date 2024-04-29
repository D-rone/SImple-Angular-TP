import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersApiService } from '../users-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  constructor(private dataService: UsersApiService, private router: Router) {}

  formData: any = {};
  onSubmit() {
    this.dataService.postData(this.formData).subscribe((response) => {
      console.log('Server response:', response);
      this.router.navigate(['/']);
    });
  }
}
