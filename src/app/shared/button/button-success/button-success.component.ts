import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-success',
  templateUrl: './button-success.component.html',
  styleUrls: ['./button-success.component.css']
})
export class ButtonSuccessComponent implements OnInit {

  @Input() value: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
