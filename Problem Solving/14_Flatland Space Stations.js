function runProgram(input){
    input = input.trim().split('\n');
    var n = input[0].split(' ').map(Number)[0]
    var m = input[0].split(' ').map(Number)[1]
    var array = input[1].split(' ').map(Number)
    var array2 = []
    for(var i=0;i<n;i++)
    {
        var small = n;
        for(var j=0;j<m;j++)
        {
            if(Math.abs(i-array[j]) < small)
            {
                small = Math.abs(i-array[j]);
            }
        }
        array2.push(small)
    }
    console.log(Math.max(...array2));
}

if (process.env.USERNAME === "ajmal") {
        runProgram("6 6\n0 1 2 4 3 5");
    } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function(input) {
            read += input;
        });
        process.stdin.on("end", function() {
            read = read.replace(/\n$/, "");
            read = read.replace(/\n$/, "");
            runProgram(read);
        });
        process.on("SIGINT", function() {
            read = read.replace(/\n$/, "");
            runProgram(read);
            process.exit(0);
        });
    }