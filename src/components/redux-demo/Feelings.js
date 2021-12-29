import { render } from "@testing-library/react"
import React from "react"


export default class Feelings extends React.Component{
      constructor(){
          super()
          this.state= {mood: ''}

      }

     happy = ()=>{
          this.setState({mood:'🥳'})
      }

      sad = ()=>{
        this.setState({mood:'💀'})
    }

    mad = ()=>{
        this.setState({mood:'🤬'})
    
  

    }
    

render(){
    return(
        <div>
           <h1>How you feel right now?<br/>{this.state.mood}</h1>
           <button onClick={this.happy}>LET'S GOOO!</button>
           <button onClick={this.sad}>BREH</button>
           <button onClick={this.mad}>Mad</button>
        </div>
        )
       
        }
     
}

   
     

