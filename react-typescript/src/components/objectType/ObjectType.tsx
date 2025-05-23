// object Type

type UserData = {
  user: {
    name: string;
    age: number;
    isRegister: boolean;
    leng: string[];
}
}

const ObjectType =({user}: UserData)=> {
  return (
    <div>
       <h1>{user.name}</h1>
        <h1>age: {user.age}</h1>
        {user.isRegister ? <p>Register user</p> : <p>Not Register user</p> }
        <p>Spack: 
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