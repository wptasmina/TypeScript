let userName = "Tasmina Akter";
let age = 34
console.log(userName, age);


function addNumber(num1:number, num2: number) {
    console.log(num1 + num2);
}
addNumber(20, 40)


 function userIdDataType(userId: string | number){
    console.log(typeof userId);
 }
 userIdDataType('123')
 userIdDataType(123)
