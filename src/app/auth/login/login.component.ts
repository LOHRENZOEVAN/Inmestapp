import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnChanges {
  @Input() name = "Lucky";


  ngOnChanges(changes: SimpleChanges): void {
  console.log(changes, 'changes');
    for(const inputChange in changes) {
      console.log(changes[inputChange].firstChange, inputChange);
    }
}


}
