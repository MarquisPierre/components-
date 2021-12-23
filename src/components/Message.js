import React from "react"
//Class based compondent declaration
 class Message extends React.Component{
     // a life cycle method that get clled first
     //when a component is initializing 
  /*   constructor(props){
         super(props)
         console.log(this.props)
        // console.log("Hey I'm in the constructor")
        // alert("constuctor time baby WHOOO!")
     }*/

   
      renderMessage = ()=> {
          //Help render the right message string
       if(this.props.sender){
        return ` ${this.props.content} sent by ${this.props.sender}`
        
       }else{
           return this.props.content
           
       }
          
    } 
    


// All class based components need to define a render method
// The render metod returns some JSX to be rendered 
    render(){
        console.log(this.props.content)

        if(this.props.content){

            return (
            <div>
                {this.renderMessage()} 
                 
                
                </div>)

        } else{
            return <div>This is the default Message!</div>}
          
    }

}

export default Message