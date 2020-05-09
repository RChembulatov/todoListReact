import React, { Component } from 'react';

import './todo-list-items.css';

export default class TodoListItems extends Component {
  state = {
    done: false,
    

  };
  
  //Перевод задачи в завершенную
  onCheckboxClick = () => {
    this.setState((state) => {
        return {
          done: !state.done
        }
      });
  };
 

  render(){
    
  const {id, name, date, deleted, onDeleted, onOpenAside } = this.props;

  const { done } = this.state;

  let classNames = 'todo__item';
    
    if (done) {
      classNames += ' doneClass';
    }

    return (
        <div className={classNames}>
              <span className="todo__item--id"
                    onClick={onOpenAside}>{id}</span>
              <span className="todo__item--name"
                    onClick={onOpenAside}>{name}
              </span>
              <span className="todo__item--date"
                   onClick = {onOpenAside} >{date}</span>
              <input className="todo__item--check" type="checkbox" 
                    onClick={this.onCheckboxClick}  />
              <span className="todo__item--delete">{deleted}
                <button className="del"
                    onClick={onDeleted}>УДАЛИТЬ</button>
              </span>            
        </div>
    );
  }; 
};
