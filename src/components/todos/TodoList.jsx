import SingleTodo from './SingleTodo';

export default function TodoList({ list, onDelete, onDoneUndone, onTodoEditTitle }) {
  return (
    <div>
      <ul>
        {list.map((tObj) => (
          <li key={tObj.id}>
            <SingleTodo
              todoId={tObj.id}
              onTodoEditTitle={onTodoEditTitle}
              onDelete={() => onDelete(tObj.id)}
              onDoneUndone={() => onDoneUndone(tObj.id)}
              todoTitle={tObj.text}
              todoComplete={tObj.completed}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
