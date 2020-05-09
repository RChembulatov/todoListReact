import React from 'react';
import TodoListItems from '../todo-list-items/todo-list-items';


import './todo-list.css';

const TodoList = ({ todos, onDeleted, onForAside, onOpenAside }) => {
    
    //Создаем массив задач
    const elements = todos.map((item) => {

        return (
            <span key = {item.id}>
                <TodoListItems {...item}
                    onDeleted={() => onDeleted(item.id)}
                    onForAside = {() => onForAside(item.id, item.name, item.date, item.description)}
                    onOpenAside={({...item}) => onOpenAside({...item})}/>                  
            </span>
        );           
    });

    return(
        <div>           
            {elements}
       </div>
    );



};

export default TodoList;