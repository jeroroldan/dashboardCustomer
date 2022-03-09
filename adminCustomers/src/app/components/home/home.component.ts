import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isBoolean:boolean = false;
  @Input() items: string[];
  @Output() newValur = new EventEmitter<string>();

  constructor() {
    this.items = [];
  }

  ngOnInit(): void {}

  addNewVal(value: string) {
    this.newValur.emit(value);
  }
  changeString() {
    this.isBoolean = !this.isBoolean;
  }
}
