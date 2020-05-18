import React, { Component } from 'react'

class InputFeild extends Component {

      constructor(props) {
        super(props)

        this.state = {
          text:''
        }
}

  /**
   * Tracks change and updates state.text which in turn is copied by value
   */
  changeInput = (event) => {
     this.setState({
       text:event.target.value
     })

  }

  /**
   * Passing event back to parent
   */
  provideValueToParent = (event) => {
    this.props.getValue(event.target.value)
  }



  render(){

    return (
        <div className="field">
          <label>{this.props.label}</label>
          <input type={this.props.type} value = {this.state.text} placeholder={this.props.placeholder} onChange={this.changeInput} onBlur={this.provideValueToParent}/>
        </div>
    )
  }
}

export default InputFeild
