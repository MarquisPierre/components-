// responsible for showing a msessage based on user's mood!


import React from "react";

class Mood extends React.Component{
    constructor(){
        super()
        
        // initialize some state variables in our component
        
        this.state = {mood:'unknown'}


    }


    onFeelingGoodPressed = () => {
        // this.setState changes the state of the Component
       this.setState({mood:'good'})
   }

   onFeelingMehPressed = () =>{
       // this.setState changes the state of the Component
    this.setState({mood:'meh'})
   }





  renderMessage = ()=> {
    // check the state to determine what message to render


    if(this.state.mood == "unknown"){
          // mood is good!
          return "Hey how you feeling today?" 
    } else if(this.state.mood == "good") {
       return  "Glad to know you're feeling good"

    } else if(this.state.mood == "meh"){
        
        return "Ah man hope you feel better soon!"

    }


  }


 render(){
     console.log('inside render!')
    console.log(this.state.mood)

  return (
      
     <div>

        <h1>{this.renderMessage()}</h1>
        <div>
            <button onClick ={this.onFeelingGoodPressed}> Feeling good Breh!😆</button>
               <button onClick={this. onFeelingMehPressed}>Feeling Meh...😐</button>
            
        </div>
     </div>
        )
 }


}

export default Mood 
