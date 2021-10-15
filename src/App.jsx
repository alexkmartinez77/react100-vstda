import React, { Component } from 'react';
import Header from './Header';
import AddNewTodo from './AddNewTodo';
import ViewTodos from './ViewTodos';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      toDoObj: {
        priority: 1,
        clicked: false,
        textArea: '',
      },
      toDoArray: [],
      }
    }

  render() {

    return (
      <div className='container'>
        <Header />
        <div className="row">
          <div className="col-4">
            <AddNewTodo />
          </div>
          <div className="col-8">
            <ViewTodos />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
