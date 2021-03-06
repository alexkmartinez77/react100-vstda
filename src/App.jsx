import React, { Component } from 'react';
import Header from './Header';
import AddNewTodo from './AddNewTodo';
import ViewTodos from './ViewTodos';
import ColumnHeader from './ColumnHeader';
import Welcome from './Welcome';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      toDoObj: {
        priority: '',
        completed: false,
        textArea: '',
        edit: false,
      },
      toDoArray: [],
      }
    this.handleInput = this.handleInput.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateObject = this.updateObject.bind(this);
    this.deleteObject = this.deleteObject.bind(this);
    }

  handleInput(event){
    let objCopy = JSON.parse(JSON.stringify(this.state.toDoObj));
    const {name, value} = event.target;
    objCopy[name] = value;

    this.setState({
      toDoObj: objCopy,
    });
  }  

  handleInputUpdate(event, i){
    const {name, value} = event.target;
    let arrayCopy = JSON.parse(JSON.stringify(this.state.toDoArray));
    arrayCopy[i][name] = value;

    this.setState({
      toDoArray: arrayCopy,
    });
  }  

  handleClick(){
    let newArray = this.state.toDoArray.concat(this.state.toDoObj);
      this.setState({
        toDoArray: newArray,
      })
    }
  
  updateObject(i, key){
    let arrayCopy = JSON.parse(JSON.stringify(this.state.toDoArray));
    arrayCopy[i][key] = !arrayCopy[i][key]
      
    this.setState({
      toDoArray: arrayCopy,
    });
  }

  deleteObject(i){
    let arrayCopy = JSON.parse(JSON.stringify(this.state.toDoArray));
    arrayCopy.splice(i,1)

    this.setState({
      toDoArray: arrayCopy,
    });
  }

  render() {
    return (
      <div className='container'>
        <Header/>
        <div className="row">
          <div className="col-4">
            <div className="row card alert-secondary">
              <ColumnHeader columnHeader="Add New Todo"/>
              <AddNewTodo handleInput={this.handleInput} priority={this.state.toDoObj.priority} textArea={this.state.toDoObj.textArea}/>
              <div className="row my-2 text-center">
                <div className="col">
                  <button className="create-todo btn btn-primary" name="submit" onClick={() => this.handleClick()}>
                    <span className="material-icons align-middle">add</span>{" Add "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 offset-1">
          <ul className=" list-group row card  alert-secondary">
            <ColumnHeader columnHeader="View Todos"/>
            {this.state.toDoArray.length == 0 ? <Welcome /> : this.state.toDoArray.map((todo, i)=><ViewTodos key={i} index={i} toDoObj={todo} updateObject={this.updateObject} deleteObject={this.deleteObject} handleInputUpdate={this.handleInputUpdate}/>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
