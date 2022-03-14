import React , {useState, useEffect , useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus()
    })

    //Preventing the default change
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            //generating a random id for each element
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    }

    //Setting the input value to the input state
    const handleChange = e =>{
        setInput(e.target.value);
    }

  return (
       <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Actualiza Tu Tarea'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Agrega una tarea'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Añade una tarea
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm