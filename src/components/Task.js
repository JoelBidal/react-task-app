import React, { Component} from 'react';
import PropTypes from 'prop-types';


class Task extends Component{
    StyleCompleted(){
        return {
            fontSize: '20px',
            fontWeight: 500,
            textAlign: 'center',
            margin: '20px 0px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    render(){
        const {task} = this.props;
        return <div className="taskBox">
            <div style={this.StyleCompleted()}>
                {task.title}
            </div>
            <div className="description">
                {task.description}
            </div>
            <div className="btnBox">
                <input type="checkbox" className="check" onChange={this.props.checkDone.bind(this, task.id)}/>
                <button className="btnDelete"
                onClick={this.props.deleteTask.bind(this, task.id)}>
                    Delete
                </button>
            </div>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;