function processData(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
  let stack = [];
  for (let i = 1; i <= n; i++) {
    let nums = input[i].trim().split(" ");
    if (Number(nums[0]) === 1) {
      stack.push(Number(nums[1]));
    } else if (Number(nums[0]) === 2) {
      stack.pop();
    } else {
      console.log(Math.max(...stack));
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
