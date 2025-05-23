// Buildin-type: string, number, boolean
// user defined types: array, object, enum, union, any, custom type

type UserProps = {
    name: string, 
    email:string, 
    id: number, 
    isRegister: boolean
}

const User = ({name, email, id, isRegister} : UserProps) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>id: {id}</h1>
        {isRegister ? <h1>Register user</h1> : <p>Not user</p> }
    </div>
  )
}

export default User