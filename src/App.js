import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./form"
import { render } from '@testing-library/react';
import { renderIntoDocument } from 'react-dom/test-utils';

// function App() {
//   const [todo,setValue] = useState([]);
 
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <Form
//           onSubmit={text => setValue([{text,complete:false}, ...todo])}
//         />

//         <div>
//           {todo.map(({text})=> (
//             <div key={text}>{text}</div>
//           ))}
//         </div>
//       </header>
//     </div>
//   );
// }

function App(){
    const [value,setValue] = useState("");
    const [list,setList] = useState([{val:"Auxenta"},{val:7},{val:"Ashan"}]);

    function handleChange(event){
      setValue(event.target.value);
      console.log(value);
    }
    // function handleSubmit(event){
    //   alert("Value : "+value)
    //   event.preventDefault();
      
    // }
    function handleList(event){
      setList([{val:value},...list]);
      // alert(event.target.value)
      event.preventDefault();
      console.log(list);
    }

    function removeValue(item){
      // alert("Clicked")
      console.log(item);
      const newlist = list.splice(item,1);
      console.log(newlist);
      console.log(list)
      setValue({list:list})
    }
    
    // function showValues(event){
    //   return (<ul>
    //     {list.map((item) => {
    //       return <li key={list.indexOf(item.val)}>{item.val}</li>;
    //     })}
    //   </ul> )
    // }
    
  
  return(
    <div>
      <form >
        <input placeholder="Enter a value" onChange={handleChange}/>
        <input type="submit" value="submit" onClick={handleList}/>
        <input type="reset" value="Reset"/>
        <input type="button" value="Remove All" onClick={()=>(setList([]))}/>

      </form>
  <div>
      <ul>
        
        {list.map((item) => {
          return <li key={list.indexOf(item)}>{item.val} <input type="button" value="Delete" onClick={()=> removeValue(list.indexOf(item))}/></li>;
        })}
      </ul>

  </div>
    </div>
  );
}

export default App;
