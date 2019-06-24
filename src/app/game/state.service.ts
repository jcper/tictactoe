import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface State {
   turn: string,
   values: string[][],
   click : number,
   clickWinner: number
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
private _state$: BehaviorSubject<State>;

  constructor() {
    let initialState = {
     turn: 'PLAYERX',
        values: [
            ['-','-','-'],
            ['-','-','-'],
            ['-','-','-']
           ],
      click: 0,
      clickWinner: 0

	  };

     this._state$ = new BehaviorSubject(initialState);

}

get state$ (): BehaviorSubject<State> {
    return this._state$; 
}

get state (): State {
   return this._state$.getValue();
  }

set state (state: State) {
   this._state$.next(state);
 }

 updateValue(row, col) {
   if(this.state.values[row][col] === '-') {
    let newValue = this.state.turn === 'PLAYERX' ? 'X' : '0';
    let newTurn = this.state.turn === 'PLAYERX' ? 'PLAYER0' : 'PLAYERX';
    this.state.values[row][col] = newValue;

    if(this.state.values[0][0] === 'X' && this.state.values[0][1] === 'X' &&
    this.state.values[0][2] === 'X') {
       this.state.clickWinner=3;
        console.log("winner",this.state.clickWinner)
     }else if(this.state.values[1][0] === 'X' && this.state.values[1][1] === 'X' &&
    this.state.values[1][2] === 'X') {
       this.state.clickWinner=3;
        console.log("winner",this.state.clickWinner)
     }else if(this.state.values[2][0] === 'X' && this.state.values[2][1] === 'X' &&
        this.state.values[2][2] === 'X') {
          this.state.clickWinner=3;
        console.log("winner",this.state.clickWinner)
     }else if(this.state.values[0][0] === 'X' && this.state.values[1][0] === 'X' &&
        this.state.values[2][0] === 'X') {
          this.state.clickWinner=3;
        console.log("winner",this.state.clickWinner)
     }else if(this.state.values[0][1] === 'X' && this.state.values[1][1] === 'X' &&
        this.state.values[2][1] === 'X') {
          this.state.clickWinner=3;
        console.log("winner",this.state.clickWinner)
     }else if(this.state.values[0][2] === 'X' && this.state.values[1][2] === 'X' &&
        this.state.values[2][2] === 'X') {
          this.state.clickWinner=3;
        console.log("winner",this.state.clickWinner)
     }else if(this.state.values[0][2] === 'X' && this.state.values[1][1] === 'X' &&
        this.state.values[2][0] === 'X') {
          this.state.clickWinner=3;
        console.log("winner",this.state.clickWinner)
     }else if(this.state.values[0][0] === 'X' && this.state.values[1][1] === 'X' &&
        this.state.values[2][2] === 'X') {
          this.state.clickWinner=3;
        console.log("winner",this.state.clickWinner)
     }else{
       this.state.clickWinner=0;
     }
     
    this.state.turn = newTurn;
    this.state.click=this.state.click + 1;
    }
    this._state$.next(this.state);
    }
   
  

 

reset() {
   this.state = {
   turn: 'PLAYERX',
   values: [
           ['-','-','-'],
           ['-','-','-'],
           ['-','-','-']
           ],
      click: 0,
      clickWinner: 0

        };

    }
}
 
