import React from 'react';

export class Header extends React.Component{
  render() {
    return(
      <div className="row border-bottom mb-4">
        <div className="col">
          <h1>Very Simple Todo App</h1>
          <p>Track all of the things</p>
        </div>
      </div>
    )
  }
}

export default Header;