import { Component, OnInit, Input, Output } from '@angular/core';
import {StateService} from './../state.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

 @Input() row: number;
 @Input() column: number;
  _clicks:number;
 
 private _stateService:StateService;

  constructor(stateService:StateService) {
     this._stateService=stateService;
    
   }

  ngOnInit() {
  }

  _handleSquareClick(){
   console.log("Square click", this.row,this.column,this._stateService.state.click);
   this._stateService.updateValue(this.row,this.column);
   this._clicks=this._stateService.state.click;
    console.log(this._stateService.state.click);
  }
  
   

}
