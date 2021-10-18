import React from 'react';
import Label from './Label'

export class ViewTodos extends React.Component{

  render() {
    const {priority, completed, textArea, edit} = this.props.toDoObj;
    let i = this.props.index;
    let bgColor;

    switch(priority){
      case '1':
        bgColor = "bg-red";
        break;
      case '2':
        bgColor = "bg-yellow";
        break;
      case '3':
        bgColor = "bg-green";
        break;
      default:Add
        bgColor = "bg-white";
    }

    return(
      
      <div className={` ${bgColor}`}>
        {
          edit
          ?
          /* Form */
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
                  <span className="material-icons align-middle">save</span>{" Save "}
                </button>
              </div>
            </div>
          </div>
          : 
          /* Todo Item */
          <div>
            <input className="align-middle ml-2" type="checkbox" checked={completed} onChange={() => this.props.updateObject(i, 'completed')}/>
            <span className="align-middle">{textArea}</span>
            <a className=" align-middle delete-todo float-right ml-2 pointer" onClick={() => this.props.deleteObject(i)}><span className="material-icons align-middle">delete_outline</span></a>
            <a className=" align-middle edit-todo float-right pointer" onClick={() => this.props.updateObject(i, 'edit')}><span className="material-icons align-middle">edit</span></a>
          </div>
        }
      </div>
    )
    
  }
}

export default ViewTodos;