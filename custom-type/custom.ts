
type User = { name: string; id: number}

let user1:  User
user1 = {name: 'tasmi', id: 234343}

console.log(user1);

let user2: User
user2 = {name: 'tasmina', id: 111234343}

console.log(user2);

let users: User[]
users = []
users.push(user1, user2)
console.log(users);


type RequstType = "Get" | "Post"
let getRequst: RequstType
getRequst = "Post"

function hendleder(requstType: RequstType){
    console.log(requstType);
}
hendleder("Get")