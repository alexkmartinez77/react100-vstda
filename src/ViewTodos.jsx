import React from 'react';

export class ViewTodos extends React.Component{

  render() {
    const {priority, completed, textArea} = this.props.toDoObj;
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
        <input className="float-left" type="checkbox" checked={completed} onChange={(e) => this.props.updateObject(e, i)}/>
        <span>{textArea}</span><span>{i}</span>
        <a className="float-right ml-2" style={{color: 'blue', cursor: 'pointer'}} onClick={() => this.props.deleteObject(i)}>Delete</a>
        <a className="float-right" style={{color: 'blue', cursor: 'pointer'}}>Edit</a>
      </div>
    )
  }
}

export default ViewTodos;