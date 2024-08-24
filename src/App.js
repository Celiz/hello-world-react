import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import Card from './components/Card/Card';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Counter />
      <Form />
      <Card name={'Matias'} surname={'Celiz'} image={'https://avatars.githubusercontent.com/u/82237565?v=4'} />
      <Todo />
    </div>
  );
}

export default App;
