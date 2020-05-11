import React, { Component } from 'react';
import './modal-add-task.css';


export default class ModalAddTask extends Component {

    state = {
        name: '',
        date: '',
        done: false,
        deleted: false,
        description: '',
        isShow: {
            display: 'none',
        },
        classNameState: 'input',
        
    };

    //Закрыть модальное окно добавления задач
    closeModalTask = () => {
        this.setState(() => {
            return {
                isShow: {
                    display: 'none',
                },
                name: '',
                date: '',
                done: false,
                deleted: false,
                description: '',
                classNameState: 'input',
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

    //Выводим название
    onLabelChangeName = (e) => {
        this.setState({
            name: e.target.value      
        });
    };

    //Выводим дату
    onLabelChangeDate = (e) => {
        this.setState({
            date: e.target.value      
        });
    };
    //Выводим описание
    onLabelChangeDescription = (e) => {
        this.setState({
            description: e.target.value      
        });
    };

    //Отправляем данные
    onSubmit = (e) => {
        e.preventDefault();
        //Проверка на заполненность форм, обнуление форм после отправки данных
        if (this.state.name !== "" && this.state.date !== "" && this.state.description !== "") {
            this.props.onAddTask(this.state.name, this.state.date, this.state.description);
            this.setState({
                name: '',
                date: '',
                done: false,
                deleted: false,
                description: '',
                classNameState: 'input',
                isShow: {
                    display: 'none',
                },
            });
        }
        //Проверка на заполненность форм
        if (this.state.name === "" || this.state.date === "" || this.state.description === "") {
            this.setState({
                classNameState: 'input--empty',
            });
        };
    };
  
    render() {

    const { classNameState } = this.state;
        return(
            <div className="modal__add">
                <button className="btn"
                        onClick={() => this.openModalTask()}>Добавить
                </button>

                <div className="modal__add--task" style={this.state.isShow}>
                    <div className="modal__wrapper">
                        <form className="modal__window"
                            onSubmit={this.onSubmit}>
                            <div className="modal__window--close"
                                onClick={() => this.closeModalTask()}>&times;</div>
                            <input
                                type="text"
                                className={classNameState}
                                placeholder="Введите название задачи"
                                onChange={this.onLabelChangeName}
                                value={this.state.name}/>
                            <input 
                                type="date" 
                                className={classNameState}
                                placeholder=""
                                onChange={this.onLabelChangeDate}
                                value={this.state.date}/>
                            <input
                                type="text"
                                className={classNameState}
                                placeholder="Введите описание задачи"
                                onChange={this.onLabelChangeDescription}
                                value={this.state.description}/>
                            <button className="btn">Добавить</button>
                        </form>
                    </div>        
                </div>
            </div>
        );
    };
};

