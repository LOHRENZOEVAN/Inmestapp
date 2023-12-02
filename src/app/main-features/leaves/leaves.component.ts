import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leaves',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leaves.component.html',
  styleUrl: './leaves.component.scss'
})
export class LeavesComponent implements OnInit {
  leaves: any[] = [];

  constructor(
    private leaveService: LeaveService
  ){}

ngOnInit(): void {
  this.getMyLeaves();
}
  getMyLeaves() {
    this.leaveService.getLeaves().subscribe((resp: any) => {
      this.leaves = resp;
    });
  }
}
