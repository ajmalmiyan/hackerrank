function runProgram(input){
    input = input.trim().split('\n');
    n = Number(input[0]);
    for(var i=1;i<=n;i++)
    {
        var grade = Number(input[i]);
        var next = Math.ceil(grade/5)*5;
        if((next-grade)<3 && grade>=38)
        {
            console.log(next);
        }
        else
        {
            console.log(grade);
        }
    }
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