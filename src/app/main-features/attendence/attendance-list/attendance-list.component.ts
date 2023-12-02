import { Component } from '@angular/core';

export interface Student {
  studentNo: number;
  name: string;
  email: string;
  present: boolean;
}

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css'],
})
export class AttendanceListComponent {
  displayedColumns: string[] = ['studentNo', 'name', 'email', 'status'];

  students: Student[] = [
    { studentNo: 1, name: 'Student 1', email: 'student1@example.com', present: true },
    // Add other students similarly...
    { studentNo: 51, name: 'Student 51', email: 'student51@example.com', present: false },
  ];
}
