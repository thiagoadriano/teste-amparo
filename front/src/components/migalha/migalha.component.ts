import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-migalha',
  templateUrl: './migalha.component.html',
  styleUrls: ['./migalha.component.css']
})
export class MigalhaComponent implements OnInit {
  @Input() local = [];

  constructor() { }

  ngOnInit(): void {
    this.local.unshift('Início');
  }

}
