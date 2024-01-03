import './App.css';
import React from 'react';
import hoc from './component/hoc';
class HOC extends React.Component{
    render(){
        return(
            <h1>I am {this.props.name}</h1> 
        );
    }
}
export default hoc(HOC);