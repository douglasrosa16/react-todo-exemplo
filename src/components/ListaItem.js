import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

function ListaItem({ todos, removeLista }){ 
  return todos.map((todo, index) => (
    <div className={'lista-caixinha'} key={index}>
      <div key={todo.id}>
        {todo.text}
      </div>
      <div className='icones'>
        <RiCloseCircleLine
          onClick={() => removeLista(todo.id)}          
        />      
      </div>
    </div>
  ));
};

export default ListaItem;
