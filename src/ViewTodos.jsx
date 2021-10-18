import React from 'react';
import Label from './Label'

export class ViewTodos extends React.Component{

  render() {
    const {priority, completed, textArea, edit} = this.props.toDoObj;
    let i = this.props.index;
    let bgColor;

    switch(priority){
      case '1':
        bgColor = "bg-danger";
        break;
      case '2':
        bgColor = "bg-warning";
        break;
      case '3':
        bgColor = "bg-success";
        break;
      default:Add
        bgColor = "bg-white";
    }

    return(
      
      <div className={bgColor}>
        {
          edit
          ?
          <div>
            <Label inputName="textArea" innerText="Description"/>
            <div className="row">
              <div className="col-10 offset-1">
                <textarea className="create-todo-text form-control" name="textArea" type="text" defaultValue={textArea} onChange={(e) => this.props.handleInputUpdate(e, i)}/>
              </div>
            </div>
            <Label inputName="priority" innerText="Priority"/>
            <div className="row">
              <div className="col-10 offset-1">
                <select className="form-control" name="priority" defaultValue={priority} onChange={(e) => this.props.handleInputUpdate(e, i)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="row my-5 text-center">
              <div className="col-12">
                <button className="btn btn-primary" name="submit" onClick={() => this.props.updateObject(i, 'edit')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                  </svg>{" Save "}
                </button>
              </div>
            </div>
          </div>
          : 
          <div>
            <input className="float-left" type="checkbox" checked={completed} onChange={() => this.props.updateObject(i, 'completed')}/>
            <span>{textArea}</span><span>{i}</span>
            <a className="delete-todo float-right ml-2" style={{color: 'blue', cursor: 'pointer'}} onClick={() => this.props.deleteObject(i)}>Delete</a>
            <a className="edit-todo float-right" style={{color: 'blue', cursor: 'pointer'}} onClick={() => this.props.updateObject(i, 'edit')}>Edit</a>
          </div>
        }
      </div>
    )
    
  }
}

export default ViewTodos;