import React from 'react';
import ColumnHeader from './ColumnHeader';

export class ViewTodos extends React.Component{
  render() {
    const {priority, clicked, textArea} = this.props.toDoObj;
    return(
      <div className="col">
        {textArea}
      </div>
    )
  }
}

export default ViewTodos;