import React, { Component } from 'react';
import './modal-add-task-form.css';

export default class ModalAddTaskForm extends Component {

  render() {

  const {onAddTask, onCloseTask} = this.props;

        return (            
          <div className="modal__wrapper">
            <div className="modal__window">
              <div className="modal__window--close"
                onClick={() => onCloseTask()}>&times;</div>
              <input
                type="text"
                name="taskName"
                placeholder="Введите название задачи"/>
              <input type="date" name="taskDate" placeholder=""/>
              <input
                type="text"
                name="taskDescription"
                placeholder="Введите описание задачи"/>
              <button className="btn"
                      onClick={ () => {onAddTask('hello') }}>Добавить</button>
            </div>
          </div>        
        );       
  };
};
