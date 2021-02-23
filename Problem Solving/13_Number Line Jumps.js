function runProgram(input){
    input = input.trim().split(' ').map(Number);
    var x1 = input[0];
    var v1 = input[1];
    var x2 = input[2];
    var v2 = input[3];
    var isNo = true;
    for(var i=1;i<10000;i++)
    {
        if(x1+(v1*i) == x2+(v2*i))
        {
            isNo = false;
            console.log('YES')
            break;
        }
    }
    if(isNo == true)
    {
        console.log('NO')
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