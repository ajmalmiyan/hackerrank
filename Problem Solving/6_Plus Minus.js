function runProgram(input){
    input = input.trim().split('\n');
    var n = Number(input[0]);
    var array = input[1].split(' ').map(Number);
    var out = [0, 0, 0];
    for(var i=0;i<n;i++)
    {
        if(array[i]>0)
        {
            out[0]++;
        }
        else if(array[i]<0)
        {
            out[1]++;
        }
        else if(array[i]==0)
        {
            out[2]++;
        }
    }
    console.log((out[0]/n).toFixed(6));
    console.log((out[1]/n).toFixed(6));
    console.log((out[2]/n).toFixed(6));
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