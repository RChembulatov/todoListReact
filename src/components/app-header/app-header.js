import React from 'react';
import './app-header.css';

const AppHeader = () => {
    return(

            <div className="todo__list--show">
                <div className="todo__header">
                    <span>ID</span>
                    <span>Name</span>
                    <span>date</span>
                    <span>Status</span>
                    <span>Delete</span>
                </div>
            </div>
        

    );
};

export default AppHeader; 
