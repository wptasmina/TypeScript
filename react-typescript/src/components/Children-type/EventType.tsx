
import { useState } from "react";


const EventType = () => {
    const [user, setUser] = useState("");

    const handleChangeUser =  (event: React.ChangeEvent<HTMLInputElement>) =>{
        setUser(event.target.value)
    }

    const handleClick =  (event: React.MouseEvent<HTMLButtonElement>) =>{
        // setUser(user)
        console.log(user)
    }

  return (
    <div style={{margin: "20px"}}>EventType:
        <h3>Create a New User</h3>
        <input onChange={handleChangeUser} type="text" placeholder="Enter user" value={user} />
        <button onClick={handleClick}>show</button>
        <p style={{margin: "20px"}}>{user}</p>
    </div>
  )
}

export default EventType