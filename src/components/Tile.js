import React from "react";
import '../css/Tile.css'


class Tile extends React.Component{

    render(){
return <div className={'Tile'} style={{backgroundColor: this.props.colorToShow}}> I'm a Title!</div>
         
  }
}

export default Tile