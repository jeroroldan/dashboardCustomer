import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() item: string = ''; // decorate the property with @Input()
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newValue = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  addNewValue(value2: string) {
    this.newValue.emit(value2);
  }
}
