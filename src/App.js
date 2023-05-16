import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
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

    <h1>To-Do List</h1>


    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Write a event to add into list"
          aria-label="To do input"
          aria-describedby="basic-addon2"
          value={text} type='text' onChange={InputBar}
        />
        <Button variant="outline-primary" id="button-addon2"  onClick={appendValue} >
          Done!
        </Button>
      </InputGroup>
   
    <div className='Display-div'>
    
    {
      list.map((listItem,index)=>(
        <Card>
        <Card.Header>Event ({index+1})</Card.Header>
        <Card.Body>
        <Card.Title>
        {listItem}
        </Card.Title>
        <Button onClick={()=> {
          Delete(index);
          done_list(index);
        }} variant='primary'>Done!!</Button>

        </Card.Body>
        </Card>
        

      ))
    }
    
   
  

    <h1 className='done-with-h1'>Events which you are done with"({tick.length})"</h1>
      <ul className='done-with'>
      {tick.map((tickItem,idx)=>(
        <Card>
        <Card.Header>{idx+1}</Card.Header>
        <Card.Title>{tickItem}</Card.Title>
        </Card>
      ))}
      
      </ul>    
    </div>



    

    <Button variant="outline-primary" id="button-addon2"  onClick={reset} > Reset!</Button>

    
    </div>

  );
}

export default App;
