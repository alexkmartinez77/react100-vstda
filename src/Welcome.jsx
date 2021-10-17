import React from 'react';

export class Welcome extends React.Component{
  render() {
    return(
      <div className="bg-success">
          <h5>Welcome to Very Simple Todo App!</h5>
          <p>Get started now by adding a new todo on the left.</p>
      </div>
    )
  }
}

export default Welcome;