function runProgram(input){
    input = input.trim().split('\n');
    var n = Number(input[0]);
    var array = input[1].split(' ').map(Number);
    var count = 0;
    var max = Math.max(...array);
    for(var i=0;i<n;i++)
    {
        if(array[i] == max)
        {
            count++;
        }
    }
    console.log(count);
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