//mixed data Type- key, value

let user: [number, string, boolean]
 user = [24, 'tasmi', true]

 user.push(12, 'akter')

 console.log(user);


  function userIdDataType(userId: string | number){
    console.log(typeof userId);
 }

 userIdDataType('123')
 userIdDataType(123)

 let userIds: string | number | boolean = 12334567;
 console.log(userIds);
 