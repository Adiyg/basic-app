import React,{useState,useEffect} from 'react'

function TodoAppUseEffect() {
    const [todos,setTodos] =useState([]);
    const[input,setInput] = useState();

    const handleClick = (e)=> {
        e.preventDefault();
        setTodos([...todos,input])
        setInput(" ")
    }

  return (
    <div className='text-center'>
        <form>
        <div className='container row mt-5'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <input type="text" class="form-control" id="" 
                placeholder='add your items'
                onChange={(e) =>{setInput(e.target.value)}}
                value={input}
                />
            </div>
            <div className='col-md-4'>
                <button onClick={handleClick} className="btn btn-primary mb-3">AddTodos</button>
            </div>
            {todos.map((todo)=>(
                    <p>{todo}</p>
                ))}
        </div>
        </form>
    </div>
  )
}

export default TodoAppUseEffect