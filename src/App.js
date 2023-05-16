import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [text,setText]=useState('');
  const [list,setList]=useState([]);
  const [tick,setTick]=useState([]);

  const InputBar=(e)=>{
    setText(e.target.value);
  }
  const appendValue=(e)=>{
    e.preventDefault();
    if(text.trim()!==''){
      setList([...list,text]);
      setText('');
    }

    }

    const Delete=(index)=>{

      const up=[...list];
  
      up.splice(index,1);
      setList(up);
    }
    const done_list=(index)=>{
      setTick([...tick,list[index]]);
    }
  const reset = () => {
    const confirmation = window.confirm('Are u sure you want to reset');
    if (confirmation) {
      setList([]);
      setTick([]);
    }
  };



  
  
  
  return (
    <div className="App">
    <div className='input-div'>
    <h1>Enter the events to-do({list.length})</h1>
  
    <input value={text} type='text' onChange={InputBar} placeholder='write to add to-do'  className='input-bar' ></input>
    <div classname="add-button">
    <button  onClick={appendValue}>Add!</button>
    </div>
   
    </div>
    <div className='Display-div'>
    <ol className='display-list'>
    {list.map((listItem,index)=>(
      <li key={index} className='text-box'>
      <h2 className='to-do-text'>{listItem}</h2>
      {(<button onClick={()=> {
        Delete(index);
        done_list(index);
      }}>Done!!</button>)}
      
      </li>
    ))

    }
    </ol>

    <h1 className='done-with h1'>Events which you are done with"({tick.length})"</h1>
      <ul className='done-with'>
      {tick.map((tickItem,idx)=>(
        <li key={idx} >{tickItem}</li>
      ))}
      </ul>    
    </div>

    <div className='reset-div'>
    <button onClick={reset}>Reset!!</button>
    
    </div>

    </div>
  );
}

export default App;
