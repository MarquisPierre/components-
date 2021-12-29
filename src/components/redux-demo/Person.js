import React from "react"
//We need to import the connect helper to connect to the Redux state
//import {connect} from 'react-redux'
//We need to import the action we created so we can call it from our local component
//import {nameChange} from '../../redux/actions'

 class Person extends React.Component{
    
    constructor(){
        super()
        this.state ={name: ''}
    }
 // here we're changing the LOCAL state

   changeName = (event) =>{
        this.setState({ name: event.target.value})   
    }

   /* changeName= ()=>{
          this.props.dispatch(nameChange(event.target.value))

    }*/

render(){
    return(
        <div>
           <form>
               <h1>My name is {this.state.name}</h1>
               <input type="text" value={this.state.name} 
               onChange={this.changeName}/>
           </form>
        </div>
       )
     }
   }





   export default Person