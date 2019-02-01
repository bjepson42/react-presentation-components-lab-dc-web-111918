// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      mood: "happy"
    }


  }

  clickHandler = () => {
    this.setState({
      mood: "sad"
    })


  }


  render(){

    return (<div onClick={this.clickHandler}>
              <button>{this.state.mood}</button>
            </div>)
  }
}

export default SimpleComponent
