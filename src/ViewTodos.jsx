import React from 'react';
import Label from './Label'

export class ViewTodos extends React.Component{

  render() {
    const {priority, completed, textArea, edit} = this.props.toDoObj;
    let i = this.props.index;
    let bgColor;

    switch(priority){
      case '1':
        bgColor = "custom-success";
        break;
      case '2':
        bgColor = "custom-warning";
        break;
      case '3':
        bgColor = "custom-danger";
        break;
      default:Add
        bgColor = "bg-white";
    }

    return(
      
      <li className={`list-group-item ${bgColor}`}>
        {
          edit
          ?
          /* Form */
          <div>
            <Label inputName="textArea" innerText="Description"/>
            <div className="row">
              <div className="col-10 offset-1">
                <textarea className="update-todo-text form-control" name="textArea" type="text" defaultValue={textArea} onChange={(e) => this.props.handleInputUpdate(e, i)}/>
              </div>
            </div>
            <Label inputName="priority" innerText="Priority"/>
            <div className="row">
              <div className="col-10 offset-1">
                <select className="update-todo-priority form-control" name="priority" defaultValue={priority} onChange={(e) => this.props.handleInputUpdate(e, i)}>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                </select>
              </div>
            </div>
            <div className="row my-5 text-center">
              <div className="col-12">
                <button className="update-todo btn btn-primary" name="submit" onClick={() => this.props.updateObject(i, 'edit')}>
                  <span className="material-icons align-middle">save</span>{" Save "}
                </button>
              </div>
            </div>
          </div>
          : 
          /* Todo Item */
          <div>
            <input className="align-middle ml-1" type="checkbox" checked={completed} onChange={() => this.props.updateObject(i, 'completed')}/>
            <span className="align-middle">{textArea}</span>
            <a className="delete-todo align-middle float-right ml-2 pointer" onClick={() => this.props.deleteObject(i)}><span className="material-icons align-middle">delete_outline</span></a>
            <a className="edit-todo align-middle float-right pointer" onClick={() => this.props.updateObject(i, 'edit')}><span className="material-icons align-middle">edit</span></a>
          </div>
        }
      </li>
    )
    
  }
}

export default ViewTodos;