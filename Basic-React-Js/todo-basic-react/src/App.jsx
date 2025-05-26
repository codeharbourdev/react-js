import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {

  /***********   state update  ***************/
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');

  /************  add task  *****************/
  function addTask() {
    if(newTask.trim() === "") {
      return
    }

    setTaskList([...taskList, newTask]);
    setNewTask('');
  }

  /************  delete task  *******************/
  function deleteTask(index) {
    const updateTask = taskList.filter((item, i) => i !== index);
    setTaskList(updateTask);
  }

  return (
    <div className='main-div'>
      <h1>Basic Todo React App 📃</h1>
      <nav>
        <input type="text" placeholder='Enter Task 📚' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button onClick={addTask}>Add 👨‍💻</button>
      </nav>
      <Todo taskList={taskList} onDelete={deleteTask}/>
    </div>
  )
}

export default App
