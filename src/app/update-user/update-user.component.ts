import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private dataService: UsersApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  userId: String = '';

  formData: any = {};

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
  }

  onSubmit() {
    this.dataService
      .updateData({
        id: this.userId,
        nom: this.formData.nom,
        age: this.formData.age,
      })
      .subscribe((response) => {
        console.log('Server response:', response);
        this.router.navigate(['/']);
      });
  }
}
