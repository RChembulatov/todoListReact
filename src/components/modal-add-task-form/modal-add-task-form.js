import React, { Component } from 'react';
import './modal-add-task-form.css';

export default class ModalAddTaskForm extends Component {

  state = {
    // newTask: {
    //   name: '',
    //   date: '',
    //   done: false,
    //   deleted: false,
    //   description: '',
    // },
  };

  onLabelChangeName = (e) => {
    console.log(e.target.value); //Выводим значения
    this.setState({
      name: e.target.value      
    })
  };

  onLabelChangeDate = (e) => {
    console.log(e.target.value); //Выводим значения
    this.setState({
      date: e.target.value      
    })
  };

  onLabelChangeDescription = (e) => {
    console.log(e.target.value); //Выводим значения
    this.setState({
      description: e.target.value      
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTask(this.state.name/* , this.state.date, this.state.description */);
  }

  render() {

  const { onCloseTask } = this.props;
        return (            
          <div className="modal__wrapper">
            <form className="modal__window"
            onSubmit={this.onSubmit}>
              <div className="modal__window--close"
                onClick={() => onCloseTask()}>&times;</div>
              <input
                type="text"
                name="taskName"
                placeholder="Введите название задачи"
                onChange={this.onLabelChangeName}/>
              <input type="date" name="taskDate" placeholder=""
              onChange={this.onLabelChangeDate}/>
              <input
                type="text"
                name="taskDescription"
                placeholder="Введите описание задачи"
                onChange={this.onLabelChangeDescription}/>
              <button className="btn"
              /* onClick={() => this.props.onAddTask(this.state.name, this.state.date, this.state.description)} */>Добавить</button>
            </form>
          </div>        
        );       
  };
};
