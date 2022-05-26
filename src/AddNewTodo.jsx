import React from 'react';
import Label from './Label'


export class AddNewTodo extends React.Component{
  render() {
    return(
      <div className="bg-white py-3">
          <Label inputName="wantTo" innerText="I want to..."/>
          <div className="row">
            <div className="col-10 offset-1">
              <textarea className="create-todo-text form-control" name="textArea" type="text" defaultValue={this.props.textArea} onChange={(e) => this.props.handleInput(e)}/>
            </div>
          </div>
          <Label inputName="priority" innerText="Select a priority"/>
          <div className="row">
            <div className="col-10 offset-1">
              <select className="create-todo-priority form-control" name="priority" defaultValue={this.props.priority} onChange={(e) => this.props.handleInput(e)}>
                <option value="" disabled>Prioritize</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
          </div>
      </div>
    )
  }
}

export default AddNewTodo;