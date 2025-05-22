//enum - storeconstants; duplicate value is not allowed here
// enum types: numeric, string, heterogeneoous


// numeric enum

enum RequstData{
    readData,
    saveData=3,
    deleteData
}
console.log(RequstData);
console.log(RequstData.saveData);
console.log(RequstData['readData']);

//string enum
enum RequstStringData{
    readData= "Read_Data",
    saveData= "Save_Data",
    deleteData= "Delete_Data"
}
console.log(RequstStringData);
console.log(RequstStringData["deleteData"]);

//hetergenous enum
enum RequstHetergenousData {
    id = 123434,
    readData= "Read_Data",
    saveData= "Save_Data",
}
console.log(RequstHetergenousData);

