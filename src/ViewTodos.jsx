import React from 'react';
import ColumnHeader from './ColumnHeader';

export class ViewTodos extends React.Component{
  render() {
    const {priority, clicked, textArea} = this.props.toDoObj;
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
      default:
        bgColor = "bg-white";
    }

    return(
      <div className={bgColor}>
        {textArea}
      </div>
    )
  }
}

export default ViewTodos;