function runProgram(input){
    input = input.trim().split('\n');
    var s = (input[0].trim().split(' ').map(Number))[0];
    var t = (input[0].trim().split(' ').map(Number))[1];
    var a = (input[1].trim().split(' ').map(Number))[0];
    var b = (input[1].trim().split(' ').map(Number))[1];
    var m = (input[2].trim().split(' ').map(Number))[0];
    var n = (input[2].trim().split(' ').map(Number))[1];
    var a_array = input[3].trim().split(' ').map(Number);
    var b_array = input[4].trim().split(' ').map(Number);

    function count(x,y,array)
    {
        var count = 0;
        for(var i=0;i<x;i++)
        {
            var diff = y + array[i];
            if(s<=diff && t>=diff)
            {
                count++;
            }
        }
        return count
    }
    console.log(count(m,a,a_array));
    console.log(count(n,b,b_array));
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