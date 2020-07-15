import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import TodoList from '../todo-list/todo-list';
import ModalAddTask from '../modal-add-task/modal-add-task';
import Aside from '../aside/aside';

import './app.css';

export default class App extends Component {

maxId = 4; //Id новых задач

  state = {
    tasks: [{
      id: 0,
      name: "Задача номер один",
      date: "1 января 2020",
      done: false,
      deleted: false,
      description: `Первое описание`
    },
    {
      id: 1,
      name: "Задача номер два",
      date: "2 февраля 2020",
      done: true,
      deleted: false,
      description: `Второе описание`
    },
    {
      id: 2,
      name: "Задача номер три",
      date: "3 марта 2020",
      done: true,
      deleted: false,
      description: `Третье описание`
    },
    {
      id: 3,
      name: "Задача номер четыре",
      date: "4 марта 2020",
      done: true,
      deleted: false,
      description: `Четвертое описание`
    }
    ],
    isShow: {
      display: 'none',
    },
  }

  //Закрыть модальное окно Aside
  closeAside = () => {
    this.setState(() => {
          return {
            isShow: {
                display: 'none',
            },
          };
        });  
  };

  //Открыть модальное окно Aside
  openAside = (id) => {
    this.setState(( {tasks} ) => {
      const indx = tasks.findIndex((el) => el.id === id); //Найти id, по которому произошел клик
      
      const itemName = tasks[indx].name;
      const itemDate = tasks[indx].date;
      const itemDescription = tasks[indx].description;

      return {name: itemName,
              date: itemDate,
              description: itemDescription,
              isShow: {
                display: 'block',
              },
            };    
    });
  };


  //Функция добавления задачи
  addItem = (name, date, description) => {
    
    const NewDate = new Date(date).toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const newTask = {
      id: this.maxId++,
      name: name,
      date: NewDate,
      done: false,
      deleted: false,
      description: description,
    }; 
    
    // Создаем объект задачи
    this.setState(( { tasks } ) => {
      const newArr = [
        ...tasks,
        newTask,
      ]; 
      
      // Создаем новый массив с задачами
      return {
        tasks: newArr
      };
    });
  }

  //Удаляем задачу
  deleteItem = (id) => {
    this.setState(( {tasks} ) => {

      const indx = tasks.findIndex((el) => el.id === id); //id, по которому произошел клик
      const before = tasks.slice(0, indx); //Элементы до удаленного
      const after = tasks.slice(indx +1); //Элементы после удаленного
      const newArray = [...before, ...after]; //Новый массив

      return (
        {tasks: newArray}
      );
    });
  };

    render() {

      const {tasks, name, date, description} = this.state;

        return (            
            <div className="todos">
                <div className="wrapper">
                    <div className="todo">
                        <div className="todo__headline">
                            <h1>Список дел</h1>
                        </div>

                        <AppHeader/>
                        <TodoList todos = {tasks}
                                  onDeleted={ this.deleteItem }
                                  onOpenAside = {this.openAside}/>
                        <ModalAddTask onAddTask = {this.addItem}/>
                        
                    </div>
                    
                </div>
                <Aside todos = {tasks}
                                styleDisplay = {this.state.isShow}
                                name={name} date={date} description={description}
                                onCloseAside={this.closeAside}/>
            </div>
        );
    };
};