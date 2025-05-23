// user defined types: array, object, enum, union, any, custom type
//Array:
type UserType = {
  leng: string[]
    name: string, 
    id: number, 
    isRegister: boolean
}

const ArrayUser = ({leng,name, id, isRegister}: UserType) =>{
  return (
    <div>
        <h1>{name}</h1>
        <h1>id: {id}</h1>
        {isRegister ? <p>Register user</p> : <p>Not Register user</p> }

      <p> Speaks: 
        {
          leng.map((lenguage,index)=>{
            return <span key={index}>{lenguage}</span>
            }
        )}
      </p>
    </div>
  )
}

export default ArrayUser