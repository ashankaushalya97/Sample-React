import React, { useState } from 'react';
import './App.css';
import Form from "./form"

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
    // const [value,setValue] = useState("");
    const [list,setList] = useState([{val:"Auxenta"}]);

    // function handleChange(event){
    //   setValue(event.target.value);
    // }
    // function handleSubmit(event){
    //   alert("Value : "+value)
    //   event.preventDefault();
      
    // }
    function handleList(event){
      // setList({val:event.target.value});
      alert(event.target.value)
      event.preventDefault();
    }
    
  
  return(
    <div>
      <form onSubmit={handleList}>
        <input placeholder="Enter a value" value={list.val} onChange={handleList}/>
        <input type="submit" value="submit"/>
      </form>
  <div>
    {list.map(item=>(
      <h2>{item.val}</h2>
    ))}


  </div>
    </div>
  );
}

export default App;
