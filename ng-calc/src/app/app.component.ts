import { Component } from '@angular/core';

class SavedAction {
  first: number;
  second: number;
  operator: string;
  value: number;
  timestamp: Date;

  constructor(first: number, second: number, operator: string, value: number) {
    this.first = first;
    this.second = second;
    this.operator = operator;
    this.value = value;
    this.timestamp = new Date();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first: number = 0;
  second: number = 0;
  selectedValue: string = '+';
  operators: Array<string> = [
    '+',
    '-',
    '*',
    '/'
  ];

  memory: Array<SavedAction> = [];

  latest: number = 0;

  constructor() {

  }

  doAction() {
    switch(this.selectedValue) {
      case '+':
        this.latest = this.first + this.second;
        this.saveCurrentAction();
        this.clearData();
        break;
      case '-':
        this.latest = this.first - this.second;
        this.saveCurrentAction();
        this.clearData();
        break;
      case '*':
        this.latest = this.first * this.second;
        this.saveCurrentAction();
        this.clearData();
        break;
      case '/':
        this.latest = this.first / this.second;
        this.saveCurrentAction();
        this.clearData();
        break;
    }
  }

  private saveCurrentAction() {
    this.memory.push(
      new SavedAction(this.first, this.second, this.selectedValue, this.latest)
    )
  }

  private clearData() {
    this.first = 0;
    this.second = 0;
    this.selectedValue = '+';
  }
}
