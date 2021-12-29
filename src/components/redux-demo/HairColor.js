import React from "react"

export default class HairColor extends React.Component{

    constructor(){
        super()
        this.state = {color: ''}
    }

    black =()=>{
        this.setState({color: 'BLACK'})
    }

     blonde=()=>{
        this.setState({color: '#F0D265'})
    }
    red =()=>{
        this.setState({color: 'rgb(222, 134, 20)'})
    }

    brown =()=>{
        this.setState({color: 'rgb(128, 78, 17)'})
    }
 render(){
    return(
        <div>
<h1>Whats your hair color?<br/> 
<span style={{backgroundColor: this.state.color, color:this.state.color}}>...</span>
</h1>
           <button onClick={this.black}>Black</button>
           <button onClick={this.blonde}>Blonde</button>
           <button onClick={this.red}>Red</button>
           <button onClick={this.brown}>Brown</button>
        </div>
       )
 }
  
    }
