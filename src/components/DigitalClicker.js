// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super();
    //defines initial state

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = ()=> {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }
  //rendering

  render(){
    return(
      <div>
        <button type="button" onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
