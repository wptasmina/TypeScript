
type UserData = {
    users: {
    id: number;
    title: string;
    country: string;
    text: boolean;
}[]
}

const ObjectArray = ({users} : UserData) => {
    
    return (
        <div>
        {
            users.map((user)=>{
                const { id, title, country, text } = user
                return (
                    <div key={user.id}>
                    <h1>{title}</h1>
                    <h2>{country}</h2>
                    <p>{text}</p>
                </div>
            )
            })
        }
     </div> 
  )
}

export default ObjectArray