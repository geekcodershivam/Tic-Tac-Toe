import React, { Component } from 'react';
import {Board} from '../Component/Board';
 export class Game extends Component {
    constructor(props){
        super(props);
     this.state={
xIsnext:true,
stepnumber:0,
history:[{
btn:Array(9).fill(null)
}
]
 }
    }
   
    render() {
        const history=this.state.history;
        const current=history[this.state.stepnumber];

        return (
            
             <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.onClick(i)}
                        btn={current.btn} />
                </div>            
                </div>
        );
    }
}