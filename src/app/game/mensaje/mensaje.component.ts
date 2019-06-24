import { Component, OnInit,Input} from '@angular/core';
import {StateService} from './../state.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  @Input() _click: number;
 
  private _stateService:StateService;

  constructor(stateService:StateService) {
     this._stateService=stateService;
   }

  ngOnInit() {
   
  }

  _Reset(){
    this._stateService.reset();
  }
 
   
}
