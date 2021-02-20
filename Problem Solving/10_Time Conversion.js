function runProgram(input){
    var time = input.trim();
    var hour = Number(time.substring(0,2));
    if(time.includes('AM') && hour==12)
    {
        console.log('00'+time.substring(2,8))
    }
    else if(time.includes('PM') && hour==12)
    {
        console.log(hour+time.substring(2,8))
    }
    else if(time.includes('PM'))
    {
        console.log((hour+12)+time.substring(2,8));
    }
    else
    {
        console.log(time.substring(0,8));
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