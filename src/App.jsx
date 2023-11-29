import { useState } from 'react'
import Todo from './components/categoria'
import TodoForm from './components/categorias'
import Search from './components/Procura'
import Filter from './components/Filtro'


import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar para a prova",
      categoria: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Limpar a casa",
      categoria: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Arrumar as panilhas",
      categoria: "Trabalho",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

 
  const addTodo =(text, categoria) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      categoria,
      isCompleted: false,
    }
  ] 
  
  setTodos(newTodos) 

  }

  
  const removeTodo = (id) => {
    const newTodos = [...todos]
   
    const filterTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
    )
    setTodos(filterTodos)
  }

  
  const completeTodo = (id) => {
    const newTodos = [...todos]
  
    newTodos.map((todo) => 
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    )
    setTodos(newTodos)
  }

  return (
    <>
      <div className="app">
        <h1>Notas</h1>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="nota-list">
          {todos
          .filter((todo) => filter === "All" 
          ? true 
          : filter === "Completed" 
          ? todo.isCompleted 
          : !todo.isCompleted
          ) 
          .filter((todo) => 
            todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a, b) => sort === "Asc" 
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)) 
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} /> 
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

export default App
