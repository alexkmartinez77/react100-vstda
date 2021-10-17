import React from 'react';

export class ColumnHeader extends React.Component{
  render() {
    return(
      <div className="row">
        <div className="col-10 offset-1">
          <h5>{this.props.columnHeader}</h5>
        </div>
      </div>
    )
  }

}

export default ColumnHeader;