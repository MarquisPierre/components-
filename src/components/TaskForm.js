import { render } from "@testing-library/react"
import React from "react"

class TaskForm extends React.Component{
    constructor(){
        super()

        this.state ={inputData:""}
    }

    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState ({inputData: event.target.value})

    }


    handleSubmit = (event)=> {
        // stops the page from reloading
        event.preventDefault()
        console.log('You submitted', this.state.inputData)
        // let the TaskContainter know and send data!
        this.props.onNewTask(this.state.inputData)
      }

render(){
    return (
        <form>
          <input type="text"value={this.state.inputData} onChange={this.handleInputChange} />
          <button onClick={this.handleSubmit}> Submit! </button>
       </form> 
       )
  
    }



}
   

     

 
    

    

export default TaskForm