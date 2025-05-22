//enum - storeconstants; duplicate value is not allowed here
// enum types: numeric, string, heterogeneoous
// numeric enum
var RequstData;
(function (RequstData) {
    RequstData[RequstData["readData"] = 0] = "readData";
    RequstData[RequstData["saveData"] = 3] = "saveData";
    RequstData[RequstData["deleteData"] = 4] = "deleteData";
})(RequstData || (RequstData = {}));
console.log(RequstData);
console.log(RequstData.saveData);
console.log(RequstData['readData']);
//string enum
var RequstStringData;
(function (RequstStringData) {
    RequstStringData["readData"] = "Read_Data";
    RequstStringData["saveData"] = "Save_Data";
    RequstStringData["deleteData"] = "Delete_Data";
})(RequstStringData || (RequstStringData = {}));
console.log(RequstStringData);
console.log(RequstStringData["deleteData"]);
//hetergenous enum
var RequstHetergenousData;
(function (RequstHetergenousData) {
    RequstHetergenousData[RequstHetergenousData["id"] = 123434] = "id";
    RequstHetergenousData["readData"] = "Read_Data";
    RequstHetergenousData["saveData"] = "Save_Data";
})(RequstHetergenousData || (RequstHetergenousData = {}));
console.log(RequstHetergenousData);
