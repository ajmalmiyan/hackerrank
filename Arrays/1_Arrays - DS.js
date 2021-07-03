function processData(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
  let array = input[1].trim().split(" ");
  let temp;
  for (let i = 0; i < n / 2; i++) {
    temp = array[i];
    array[i] = array[n - i - 1];
    array[n - i - 1] = temp;
  }
  console.log(array.join(" "));
}

//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   _input = "";
//   process.stdin.on("data", function (input) {
//     _input += input;
//   });

//   process.stdin.on("end", function () {
//     processData(_input);
//   });

processData(`4
  1 4 3 2
  `);
