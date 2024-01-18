import { v4 as makeId } from 'uuid';
import { useState } from 'react';
import SingleTodo from './SingleTodo';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const initTodos = [
  { id: 1, text: 'Complete task 1', completed: false },
  { id: 2, text: 'Finish task 2', completed: true },
  { id: 3, text: 'Submit task 3', completed: true },
  { id: 4, text: 'Review task 4', completed: true },
  { id: 5, text: 'Implement task 5', completed: false },
];

/*
versija po istrynimo 
[
    { id: 1, text: 'Complete task 1', completed: false },
    { id: 2, text: 'Finish task 2', completed: true },
    { id: 3, text: 'Submit task 3', completed: false }, // pokytis
    { id: 4, text: 'Review task 4', completed: true },
    { id: 5, text: 'Implement task 5', completed: false },
    { id: 50, text: newTodoVal, completed: false }
]
*/

export default function TodoSection() {
  // useState
  const [mainTodoArr, setMainTodoArr] = useState(initTodos);

  console.table(mainTodoArr);

  function handleNewTodo(newTodoVal) {
    console.log('adding todo', newTodoVal);
    // sukurti nauja objekta
    const newTodoObj = { id: makeId(), text: newTodoVal, completed: false };
    // iskonsolinti ivesta i todo reiksme
    setMainTodoArr([newTodoObj, ...mainTodoArr]);
  }

  function handleDelete(idToDelete) {
    console.log('idToDelete ===', idToDelete);
    setMainTodoArr(mainTodoArr.filter((tObj) => tObj.id !== idToDelete));
  }

  function handleDoneUndone(idToChange) {
    console.log('handleDoneUndone ===', idToChange);
    // grazinti i mainTodoArr masyva su pokyciu nekeiciant orginalo
    // const mainArrCopy = [...mainTodoArr];
    // const elToChange = mainArrCopy.find((tObj) => tObj.id === idToChange);
    // console.log('elToChange ===', elToChange);
    // elToChange.completed = !elToChange.completed;
    // setMainTodoArr(mainArrCopy);
    const modifiedArrCopyWithChange = mainTodoArr.map((tObj) => {
      if (tObj.id === idToChange) {
        // grazinti kopija objeko
        return { ...tObj, completed: !tObj.completed };
      }

      return tObj;
    });
    setMainTodoArr(modifiedArrCopyWithChange);
    // idToChange === 3
  }

  function handleTodoEditTitle(idToUpdate, updatedText) {
    console.log('handleTodoEditTitle', idToUpdate, updatedText);
    // i state grazinti nauja masyva su pakeista text reikme
    setMainTodoArr(
      mainTodoArr.map((tObj) => {
        // jei tai tas objektas kuri norim pakest
        if (tObj.id === idToUpdate) {
          return { ...tObj, text: updatedText };
        }

        return tObj;
      }),
    );
  }

  return (
    <div>
      <h2>Todos</h2>
      <h3>TotalDone Todos: {mainTodoArr.filter((tObj) => tObj.completed).length}</h3>

      <AddTodo onNewTodo={handleNewTodo} />

      <TodoList
        list={mainTodoArr}
        onTodoEditTitle={handleTodoEditTitle}
        onDelete={handleDelete}
        onDoneUndone={handleDoneUndone}
      />

      <h3>init todos</h3>
      <ul>
        {/* map per state ir make todos */}
        {initTodos.map((tObj) => (
          <li key={tObj.id}>
            id:{tObj.id} {tObj.text} - {tObj.completed ? 'Complete' : 'Incomplete'}
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
