function runProgram(input){
    n = Number(input.trim());
    for(var i=1;i<=n;i++)
    {
        console.log(spacehash(n-i));
    }
    function spacehash(space)
    {
        var out = "";
        for(var i=1;i<=n;i++)
        {
            if(i<=space)
            {
                out += " ";
            }
            else
            {
                out += "#";
            }
        }
        return out;
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