var user1;
user1 = { name: 'tasmi', id: 234343 };
console.log(user1);
var user2;
user2 = { name: 'tasmina', id: 111234343 };
console.log(user2);
var users;
users = [];
users.push(user1, user2);
console.log(users);
var getRequst;
getRequst = "Post";
function hendleder(requstType) {
    console.log(requstType);
}
hendleder("Get");
