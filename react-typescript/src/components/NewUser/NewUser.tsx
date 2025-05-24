import { useState } from "react";



const NewUser = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const heandleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setUserName(event.target.value)
    }
    const heandleEmailChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value)
    }
    const handleOnSubmit =(event: React.FormEvent<HTMLElement>)=>{
        event.preventDefault()
        const newUser = {userName, email}
        console.log(newUser)
    }
  return (
    <div>
        <h3>NewUser</h3>
        <form onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input onChange={heandleChange} type="name" id="name" value={userName} required />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input onChange={heandleEmailChange} type="email" id="email" value={email} required />
            </div>
            <button type="submit" style={{margin:"20px", background:"blue" }}>Submit</button>
        </form>
    </div>
  )
}

export default NewUser