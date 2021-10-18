import React from 'react';

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
          "form"
          : 
          <div>
            <input className="float-left" type="checkbox" checked={completed} onChange={() => this.props.updateObject(i)}/>
            <span>{textArea}</span><span>{i}</span>
            <a className="delete-todo float-right ml-2" style={{color: 'blue', cursor: 'pointer'}} onClick={() => this.props.deleteObject(i)}>Delete</a>
            <a className="edit-todo float-right" style={{color: 'blue', cursor: 'pointer'}} onClick={() => this.props.editSaveToggle(i)}>Edit</a>
          </div>
        }
      </div>
    )
    
  }
}

export default ViewTodos;