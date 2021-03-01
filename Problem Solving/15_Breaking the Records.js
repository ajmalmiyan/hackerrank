function runProgram(input){
    input = input.trim().split('\n');
    var n = Number(input[0]);
    var arr = input[1].trim().split(' ').map(Number);
    var [hs, ls] = [arr[0], arr[0]]
    var [hsc, lsc] = [0, 0];
    for(var i=1;i<n;i++)
    {
        if(hs<arr[i])
        {
            hs = arr[i]
            hsc++
        }
        else if(ls>arr[i])
        {
            ls = arr[i]
            lsc++
        }
    }
    console.log(hsc,lsc)
   
}

if (process.env.USERNAME === "ajmal") {
        runProgram(`10
    3 4 21 36 10 28 35 5 24 42`);
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