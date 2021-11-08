import React, { useState } from 'react';
import ListaForm from './ListaForm';
import ListaItem from './ListaItem';

function TodoList() {
  const [lista, setLista] = useState([]);

  function addTodo(item){
    //Isso aqui é para não preencher vazio
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    
    const newLista = [item, ...lista];

    setLista(newLista);  
  };

  function removeLista(id){
    const newArray = [...lista].filter(item => item.id !== id);

    setLista(newArray);
  };

  return (
    <>
      <h1>Minicurso React - Sua Lista</h1>      
      <ListaForm onSubmit={addTodo} />
      <ListaItem
        todos={lista}        
        removeLista={removeLista}        
      />            
    </>
  );
}

export default TodoList;
