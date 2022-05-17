const arrayToObj = (a, b) => {
    if(a.length != b.length || a.length == 0 || b.length == 0){
     return null;
    }
    let obj = {};
      
     // Using the foreach method
    a.forEach((k, i) => {obj[k] = b[i]})
    return obj;
}
module.exports = {
    arrayToObj
}