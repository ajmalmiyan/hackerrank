function runProgram(input){
    input = input.trim().split('\n');
    var alice = input[0].split(' ').map(Number);
    var bob = input[1].split(' ').map(Number);
    var sum = [0, 0]
    for(var i=0;i<alice.length;i++)
    {
        if(alice[i]>bob[i])
        {
            sum[0]++;
        }
        else if(bob[i]>alice[i])
        {
            sum[1]++;
        }
    }
    console.log(sum[0], sum[1]);
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
