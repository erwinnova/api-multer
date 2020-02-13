function duplicateCount(str) {
    var output = 0;
    var buffer = '';
    var a = str.split('');

    for(var i = 0; i<a.length; i++){
        if(a[i] === a[i+1] && a[i] !== buffer){
            buffer = a[i]
            output++
        }
        
    }
    // return `${output} + ${arr}`
    return output
}

console.log(duplicateCount('aa11222'))