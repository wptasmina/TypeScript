// object Type

type UserData = {
 user: {
    name: string[];
    email: string;
    id: number;
    age: number;
    isRegister: boolean;
    leng: string[];
}
}

const ObjectType =({user}:UserData)=> {
  const {name,email,id, age} = user

  return (
    <div>
       <h1>{name}</h1>
       <h1>{email}</h1>
       <h1>{id}</h1>
       <h1>{id}</h1>
       <p>Speaks: 
     {
       user.leng.map((lenguage, idx)=>{
        return <span key={idx}>{lenguage}</span>
       })
     }

       </p>
    </div>
  )
}

export default ObjectType