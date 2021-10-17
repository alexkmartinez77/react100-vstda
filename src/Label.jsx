import React from 'react'

export class Label extends React.Component{
  render() {
    return (
      <div className="row">
        <div className="col-10 offset-1">
          <label htmlFor={this.props.inputName}>{this.props.innerText}</label>
        </div>
    </div>
    )
  }
}

export default Label;