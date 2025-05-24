import { useState } from "react";

type User = {
    id: number,
    name: string
}

const UseStates = () => {
    // const [state, setState] = useState(0);

    // const [user, setUser] = useState<User | null>(null);
    const [user, setUser] = useState<User>({} as User);

// later...


    const hendleAdd = ()=>{
       setUser({id: 1, name: "Tasmina"});
    }
  return (
    <div>
        <button onClick={hendleAdd} style={{background: "purple", padding: "8px", marginBlock:"10px"}}>Incment</button>
        {/* <p style={{margin:"10px"}}>{user.name}</p> */}
        {/* <p style={{margin:"10px"}}>{user?.name}</p> */}
        <p style={{margin:"10px"}}>{user.name}</p>
    </div>
  )
}

export default UseStates
