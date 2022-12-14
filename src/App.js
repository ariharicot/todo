import React, {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Que Faire ?</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
