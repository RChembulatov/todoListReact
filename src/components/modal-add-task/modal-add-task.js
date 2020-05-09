import React, { Component } from 'react';
import ModalAddTaskForm from '../modal-add-task-form/modal-add-task-form';
import './modal-add-task.css';

export default class ModalAddTask extends Component {

    state = {
        isShow: {
            display: 'none',
        },
    };


//Закрыть модальное окно добавления задач
closeModalTask = () => {
    this.setState(() => {
        return {
            isShow: {
                display: 'none',
            },
          };
    });
};

//Окрыть модальное окно добавления задач
openModalTask = () => {
    this.setState(() => {
       
          return {
            isShow: {
                display: 'flex',
            },
          };
    });  
};


    render() {

        const { onAddTask } = this.props;

        return(
            <div className="modal__add">
                <button className="btn"
                        onClick={() => this.openModalTask()}>Добавить
                </button>

                <div className="modal__add--task" style={this.state.isShow}>
                    <ModalAddTaskForm onAddTask={ () => onAddTask()}
                                        onCloseTask={() => this.closeModalTask()}/>
                </div>
            </div>
        );
    };
};

