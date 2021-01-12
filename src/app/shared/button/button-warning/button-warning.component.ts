import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-warning',
  templateUrl: './button-warning.component.html',
  styleUrls: ['./button-warning.component.css']
})
export class ButtonWarningComponent implements OnInit {

  @Input() value: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
