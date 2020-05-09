import React, { Component } from 'react';


import './aside.css';

export default class Aside extends Component  {
   
  render() {

  const {/* todos, */styleDisplay, onCloseAside, date, description, name, onForAside } = this.props;
    
      return (
        <div className="todo__aside" style={styleDisplay}>
          <div className="todo__aside--close"
                onClick={() => onCloseAside()}>&times;
          </div>
          <header>
            <h2 className="todo__aside__name"
                onClick = {onForAside}>
                {name}
            </h2>
            <p>
              <span className="todo__aside__date--text">Дата: </span>
              <span className="todo__aside__date--number">{date}</span>
            </p>
          </header>
          <div className="todo__aside__content">
            <p className="todo__aside__description">{description}</p>
          </div>
        </div>
      );
  };
};