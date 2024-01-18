import SingleTodo from './SingleTodo';

export default function TodoList({ list, onDelete, onDoneUndone }) {
  return (
    <div>
      <ul>
        {list.map((tObj) => (
          <li key={tObj.id}>
            <SingleTodo
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
