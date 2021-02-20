function runProgram(input){
    input = input.trim().split('\n');
    var n = Number(input[0]);
    var array = [];
    var prim_diag = 0;
    var seco_diag = 0;
    for(var i=1;i<=n;i++)
    {
        array.push(input[i].split(' ').map(Number));
    }
    for(var i=0;i<array.length;i++)
    {
        for(var j=0;j<array.length;j++)
        {
            if(i == j)
            {
                prim_diag += array[i][j];
            }
            if((array.length-1)-j == i)
            {
                seco_diag += array[i][j];
            }
        }
    }
    console.log(Math.abs(prim_diag-seco_diag));
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