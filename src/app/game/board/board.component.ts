import { Component, OnInit,Input } from '@angular/core';
import {StateService} from './../state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private _stateService:StateService;
  private _values: string[][];
  @Input () _clicks: number;
  

  constructor(stateService:StateService) {
    this._stateService=stateService;
    this._values=stateService.state.values;
    console.log(this._clicks);
     this._clicks=0;
    
   }

  ngOnInit() {
  }

  
   
  
 

   _Reset(){
   this._stateService.reset();
  }
 
}
