import './Todo.css'


const Todo = (props) => {
  return (
    <main>
        <div className='scroller'>
            {props.taskList.map((item, i) => (
                <li>
                    <p>{item}</p>
                    <button onClick={() => props.onDelete(i)}>Delete 🥷</button>
                </li>
            ))}
        </div>
    </main>
  )
}

export default Todo
