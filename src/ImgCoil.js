import React, { Component } from 'react'
import './imgCoil.css'
class ImgCoil extends Component{
    render(){
        return(
            <div className='imgCoil'>
            <img src={this.props.info.imgSrc} alt={this.props.side}/>
            </div>
       
        );
    }
}
export default ImgCoil;