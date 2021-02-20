function runProgram(input){
    var array = input.trim().split(' ').map(Number);
    var sum = 0;
    for(var i=0;i<array.length;i++)
    {
        sum += array[i];
    }
    console.log(sum-(Math.max(...array)),sum-(Math.min(...array)));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});