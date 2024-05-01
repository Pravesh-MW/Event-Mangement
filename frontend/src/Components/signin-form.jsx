import { useState } from "react";

function SigninForm() {
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
            <form>
                <label>User Name</label>
                <input type="text" name="username" placeholder="Enter Username" onChange={handleUsernameChange}></input><br/>
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter Password" onChange={handlePasswordChange}></input><br/>
                <button onClick={handelSubmit}>Signin</button>
            </form>
        </>
    )
    
}
export default SigninForm;