import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from 'react'
import lista from "../lista.json"
import List from "./List";

function Form() {
  
  const [inputValue, setInputValue] = useState('');
  const [list,setList] = useState([]);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [editingTask,setEditingTask] = useState(null);

  // carga lista inicial
  useEffect(()=>{
    setList(lista)
  },[]);
  
  //submit create update
  const handleSubmit = (e) => {
     e.preventDefault();
    
     if(inputValue.length < 6){
      setError(true);
      return;
     }

     if(editingTask){
      //UPDATE
      setList(prev => prev.map(t => 
        t.id === editingTask.id 
        ? {...t, title: inputValue }
        : t
      ));
      setEditingTask(null);
     }else{
      //CREATE
      setList(pre => 
        [...pre, 
          {
            id: uuidv4(), 
            title: inputValue,
            isDone: false
          }
        ]);
     };
     setInputValue('');
    setMessage(true);
  };

  //DELETE
  const handleDelete = (id) => {
    setList(prev => prev.filter(task => task.id !== id));
  };

  //UPDATE
  const handleUpdate = (task) => {
    setEditingTask(task);
    setInputValue(task.title);
  };

  //COMPLETED
  const handleCompleted = (task) => {
    setList(prev => 
      prev.map(t => 
        t.id === task.id ? {...t, isDone: !t.isDone}: t
      )
    );
  };

  //CLEAR RESET
  const handleClear = () => setList([]);
  const handleReset = () => setList(lista);
  
  // MESSAGE
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => setMessage(false), 5000);
      const clearMessage = () => clearTimeout(timeout);
      return clearMessage;
    }
  }, [message]);

  useEffect(() => {
    if(error){
      const timeout = setTimeout(() => {
        setError(false)
      }, 3000);

      const clearError = () => clearTimeout(timeout);
      return clearError;
    }
  },[error]);

  useEffect(() => {
    if(inputValue){
      const timeout = setTimeout(() => {
      setInputValue("")
      },20000);

      const clearInput = () => clearTimeout(timeout);
      return clearInput;
    }
  }, [inputValue])

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añade una nueva tarea..."
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value); setError(false)}}
        required
      />
      <button type="submit" hidden={inputValue === ""}>ADD</button>
    </form>
    <List
        list={list}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleCompleted={handleCompleted}
    />
    {/*solo muestra cuando message sea true */}
    <p  hidden={message === false}>tarea añadida</p>
    <p  hidden={error === false}>Tiene que añadir más de 6 caracteres</p>
    <div className="controls">
      <button type="button" onClick={handleClear}>CLEAR</button>
      <button type="button" onClick={handleReset}>RESET</button>
    </div>
    </>
  )
}

export default Form
