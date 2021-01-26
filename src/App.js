import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import tasks from './sample/tasks.json';

// Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import Footer from './components/Footer';


class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) =>{
    const newTasks = this.state.tasks.filter(tasks => tasks.id !== id)
    this.setState({tasks: newTasks})
  }

  checkDone = id =>{
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }

  render(){
    return <div>
      <Router>
        <div className="head">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/posts">News</Link>
        </div>

        <Route exact path="/" render={() =>{
          return <div>
            <div className="titleBox">
              <h2>Write everything you need or think!</h2>
              <h4>It's the place :)</h4>
            </div>
            <TaskForm addTask={this.addTask}/>
            <div className="yourTaskBox">
              <h2>here you will find what you write!</h2>
              <p>check these examples</p>
            </div>
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              checkDone={this.checkDone}
            />
            
          </div>
          
          }}>
        </Route>
        <Route path="/posts" component={Posts}/>
        <Footer/>
      </Router>
    </div>
  }
}

export default App;
