import { useState } from "react";

function UserInput(){
  const [input,setInput]=useState('');
 
  const handleInput=(evt)=>{
     let tempstr=" ";
     setInput(evt.target.value);
     tempstr+=input;
     console.log(`Your favorite langauge is ${tempstr}`);
  }

    return(
        <div>
            <h3>User Form</h3>
            <form action="">
                <label >Enter your favorite Programming Language</label>
                <input id="uinput" type="text" value={input} onChange={handleInput}/>
            </form>
            <p>Your Favorite Language:{input}</p>
        </div>
    );
    
}

export default UserInput