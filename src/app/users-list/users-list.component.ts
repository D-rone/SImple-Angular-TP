import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  constructor(private dataService: UsersApiService, private router: Router) {}

  users = [
    {
      _id: '',
      nom: '',
      age: 0,
    },
  ];

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.error('Error Fetching Data : ' + error);
      }
    );
  }

  updateUser(id: any): void {
    this.router.navigate(['/updateUser/' + id]);
  }

  deleteUser(id: any): void {
    this.dataService.deleteUser({ id }).subscribe((response) => {
      console.log('Server response:', response);
    });
    this.ngOnInit();
  }
}
