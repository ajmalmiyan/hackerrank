function processData(input) {
    input = input.trim().split('\n');
    let array = [];
    for(let i=0;i<6;i++){
        array.push(input[i].trim().split(' ').map(Number))
    }
    let temp = 7*-9;//Constraint given
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            let sum = array[i][j]+array[i][j+1]+array[i][j+2]+array[i+1][j+1]+array[i+2][j]+array[i+2][j+1]+array[i+2][j+2];
            if(sum>temp){
                temp = sum;
            }
        }
    }
    console.log(temp);
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
  
  processData(`-9 -9 -9 -1 -1 -1 
  0 -9 0 -4 -3 -2
 -9 -9 -9 -1 -2 -3
  0 0 -8 -6 -6 0
  0 0 0 -2 0 0
  0 0 -1 -2 -4 0
    `);
  