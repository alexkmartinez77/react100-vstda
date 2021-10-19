import React from 'react';

export class ColumnHeader extends React.Component{
  render() {
    return(
      <div className="row ml-2 my-1">
          <h5>{this.props.columnHeader}</h5>
      </div>
    )
  }

}

export default ColumnHeader;