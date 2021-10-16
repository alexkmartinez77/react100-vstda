import React, { Component } from 'react';
import Header from './Header';
import AddNewTodo from './AddNewTodo';
import ViewTodos from './ViewTodos';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      toDoObj: {
        priority: '3',
        clicked: false,
        textArea: '',
      },
      toDoArray: [],
      }
      this.handleInput = this.handleInput.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

  handleInput(event){
    var  objCopy = JSON.parse(JSON.stringify(this.state.toDoObj));
    const {name, value} = event.target;
    objCopy[name] = value;

    this.setState({
      toDoObj: objCopy,
    });
  }  

  handleClick(){
  let newArray = this.state.toDoArray.concat(this.state.toDoObj);
    this.setState({
      toDoObj: {
        priority: '3',
        clicked: false,
        textArea: '',
      },
      toDoArray: newArray,
    })
  }

  render() {
    return (
      <div className='container'>
        <Header/>
        <div className="row">
          <div className="col-4">
            <AddNewTodo handleInput={this.handleInput} handleClick={this.handleClick} priority={this.state.toDoObj.priority} textArea={this.state.toDoObj.textArea}/>
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
