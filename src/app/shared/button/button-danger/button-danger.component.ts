import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-danger',
  templateUrl: './button-danger.component.html',
  styleUrls: ['./button-danger.component.css']
})
export class ButtonDangerComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
