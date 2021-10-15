import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      toDoObj = {
        priority = 1,
        clicked = false,
        textArea = '',
      },
      toDoArray = [],
      }
    }

  render() {

    return (
      <div className='container'>
        <Header />
        <div className="row">
          <div className="col s-4">
            <AddNewToDo />
          </div>
          <div className="col s-8">
            <ViewTodos />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
