import React from 'react';

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
      default:Add
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