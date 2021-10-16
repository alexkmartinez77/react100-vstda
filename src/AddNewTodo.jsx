import React from 'react';
import Label from './Label'


export class AddNewTodo extends React.Component{
  render() {
    return(
      <div className="row card bg-light">
              <div className="row">
                <div className="col-10 offset-1">
                  <p>Add New Todo</p>
                </div>
              </div>
              <Label inputName="wantTo" innerText="How much of a priority is this?"/>
              <div className="row">
                <div className="col-10 offset-1">
                  <textarea className="create-todo-text form-control" name="textArea" type="text" defaultValue={this.props.textArea} onChange={(e) => this.props.handleInput(e)}/>
                </div>
              </div>
              <Label inputName="priority" innerText="Select a priority"/>
              <div className="row">
                <div className="col-10 offset-1">
                  <select className="create-todo-priority form-control" name="priority" defaultValue={this.props.priority} onChange={(e) => this.props.handleInput(e)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="row my-5 text-center">
                <div className="col-12">
                  <button className="btn btn-primary" name="submit" onClick={() => this.props.handleClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                      <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                      <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                    </svg>{" Add "}
                  </button>
                </div>
              </div>
            <div className="row text-center">
              <div className="col-12">
                <h4 name="output" id="output"></h4>
              </div>
            </div>
      </div>
    )
  }

}

export default AddNewTodo;