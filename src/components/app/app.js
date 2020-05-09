import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import TodoList from '../todo-list/todo-list';
import ModalAddTask from '../modal-add-task/modal-add-task';
import Aside from '../aside/aside';

import './app.css';

export default class App extends Component {

maxId = 4; //Id новых задач

  state = {
    tasks: [
      {
        id: 0,
        name: "Купить фрукты",
        date: "2020-03-10",
        done: false,
        deleted: false,
        description: `Пойти на рынок и взять яблок и ананас`
      },
      {
        id: 1,
        name: "Покормить кота",
        date: "2020-03-10",
        done: false,
        deleted: false,
        description: `Насыпать в миску корма`
      },
      {
        id: 2,
        name: "Поспать",
        date: "2020-03-10",
        done: false,
        deleted: false,
        description: `Лечь на кровать закрыть глаза спать2`
      },
      {
        id: 3,
        name: "Выпить кофе",
        date: "2020-03-10",
        done: false,
        deleted: false,
        description: `Сварить кофе налить в кружку открыть рот пить кофе`
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
                display: 'flex',
              },
            };    
    });
  };


  //Функция добавления задачи
  addItem = (text) => {
    const newTask = {
      id: this.maxId++,
      name: 'text',
      date: '01.01.2000',
      description: 'text',
      done: false
    }; // Создаем объект задачи
    
    this.setState(( { tasks } ) => {
      const newArr = [
        ...tasks,
        newTask,
      ]; // Создаем новый массив с задачами

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
                        <Aside todos = {tasks}
                                styleDisplay = {this.state.isShow}
                                name={name} date={date} description={description}
                                onCloseAside={this.closeAside}/>
                    </div>
                </div>
            </div>
        );
    };
};