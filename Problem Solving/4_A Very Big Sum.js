function runProgram(input){
    input = input.trim().split('\n');
    var n = Number(input[0]);
    var array = input[1].split(' ').map(Number);
    var sum = 0;
    for(var i=0;i<n;i++)
    {
        sum += array[i];
    }
    console.log(sum);
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
