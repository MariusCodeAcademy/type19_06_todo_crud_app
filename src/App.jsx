import TodoSection from './components/todos/TodoSection';
import './styles/App.css';

export default function App() {
  return (
    <div className='App container'>
      <h1>Hello, Todo</h1>
      <hr />
      <TodoSection />
    </div>
  );
}
