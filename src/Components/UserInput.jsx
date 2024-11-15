import { useState } from "react";

function UserInput(){
  const [input,setInput]=useState('');
 
  const handleInput=(evt)=>{
     setInput(evt.target.value);
     console.log("Your favorite langauge is"+input);
  }

    return(
        <div>
            <h3>User Form</h3>
            <form action="">
                <label for="uinput">Enter your favorite Programming Language</label>
                <input id="uinput" type="text" value={input} onChange={handleInput}/>
            </form>
            
        </div>
    );
    
}

export default UserInput