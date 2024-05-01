import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);
    }


    return(
        <>
        
        <h1>Login Form</h1>

            <form>
                <label>User Name</label>&nbsp;&nbsp;
                <input type="text" name="username" placeholder="Enter Username" onChange={handleUsernameChange}></input><br/>
                <label>Password</label>&nbsp;&nbsp;
                <input type="password" name="password" placeholder="Enter Password" onChange={handlePasswordChange}></input><br/>
                <button onClick={handelSubmit}>Login</button>
            </form>
        </>
    )
    
}
export default LoginForm;