// union type 

let userId: string | number | boolean = "123";
 console.log(userId);
 

 function displayUserInfo(userId: string | number){
    console.log(userId);
    
 }
 displayUserInfo("Tasmina")
 displayUserInfo(12345)