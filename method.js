var pi=3.14
Object.updateData=function(){
    console.log("Update Data");
}
Object.deleteUser=function(){
    console.log("DeleteUser");
}
var update=function(){
    return "Update Server";
}
var add= function(a,b){
    return a+b;
}
exports.pi = pi;
exports.add = add;
exports.update = update;
exports.data = Object;