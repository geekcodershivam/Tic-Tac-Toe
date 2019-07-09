import React, { Component } from 'react';
import {Button} from './Button';
 export class Board extends Component {
    renderButton(i){
return <Button value={this.props.square[i]} 
onClick={()=>this.props.onClick(i)}/>
    }
    render() {
        return (
            <div>
                <div className="border-row">
                    {this.renderButton(0)}
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                </div>
                <div className="border-row">
                    {this.renderButton(3)}
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                </div>
                <div className="border-row">
                    {this.renderButton(6)}
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                </div>
            </div>
        );
    }
}
 