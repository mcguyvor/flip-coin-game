import React, { Component } from 'react';
import ImgCoil from './ImgCoil';
import {choice} from'./RandomCoil'
class Rolldice extends Component{
    static defaultProps={
        coin:[{side:'head',imgSrc:'https://tinyurl.com/react-coin-heads-jpg'},
            {side:'tail',imgSrc:'https://tinyurl.com/react-coin-tails-jpg'}]
    }
    constructor(props){
        super(props);
        this.state={
            currentCoin:null,
            numFlip:0,
            numTail:0,
            numHead:0
        }
        this.handleClick=this.handleClick.bind(this);
        this.flipCoil=this.flipCoil.bind(this);
    }
  
    flipCoil(){
        const newFace = choice(this.props.coin);
        console.log(this.props.coin);
        this.setState(prevstate=>{
            return{
            currentCoin: newFace,
            numFlip:prevstate.numFlip +1,
            numTail:prevstate.numTail + (newFace.side==='tail'? 1:0),
            numHead:prevstate.numHead + (newFace.side==='head'? 1:0)
            
            }
        })};
        
    
    handleClick(){
        this.flipCoil();
    }
    
    render(){
        return(
            <div>  
                <h1>Flip coil</h1>
                {this.state.currentCoin && <ImgCoil info={this.state.currentCoin}/>}
                <button onClick={this.handleClick}>Flip coin</button>
                <p>You have {this.state.numFlip} and you got {this.state.numHead} head and {this.state.numTail} tail</p>

            </div>
        );
    }
}
export default Rolldice;