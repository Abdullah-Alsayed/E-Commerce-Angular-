import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.css'
})
export class InputSelectComponent {
@Input() title:string ;
@Input() data:string[] ;
@Input() Select:string ;
@Output() selectedValue = new EventEmitter<string>();
constructor(){
this.data = []
this.title = '';
this.Select='';
}
updateChange(Selected:any){
this.selectedValue.emit(Selected.value);
}
}
