function processData(input) {
    input = input.trim().split('\n');
    let [n,d] = input[0].trim().split(' ').map(Number);
    let array = input[1].trim().split(' ').map(Number);
    for(let i=0;i<d;i++){
        array.push(array.shift());
    }
    console.log(array.join(' '));
  }
  
    // process.stdin.resume();
    // process.stdin.setEncoding("ascii");
    // _input = "";
    // process.stdin.on("data", function (input) {
    //   _input += input;
    // });
  
    // process.stdin.on("end", function () {
    //   processData(_input);
    // });
  
  processData(`5 4
  1 2 3 4 5
    `);
  