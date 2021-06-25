function processData(input) {
    input = input.trim().split("\n");
    let n = Number(input[0]);
    for(let i=1;i<=n;i++){
        let str = input[i].trim();
        console.log(balanced(str));
    }
    function balanced(str){
        let n = str.length;
        let stack = [];
        for(let i=0;i<n;i++){
            if(['{','(','['].includes(str[i])){
                stack.push(str[i]);
            }
            else{
                if(str[i] === '}' && stack[stack.length-1] === '{'){
                    stack.pop();
                }
                else if(str[i] === ']' && stack[stack.length-1] === '['){
                    stack.pop();
                }
                else if(str[i] === ')' && stack[stack.length-1] === '('){
                    stack.pop();
                }
                else{
                    return 'NO';
                }
            }
        }
        if(stack.length === 0){
            return 'YES';
        }
        return 'NO';
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
  

//   processData(`3
//   {[()]}
//   {[(])}
//   {{[[(())]]}}
//   `)

// let str = "{)";
// for(let i=0;i<str.length;i++){
//     // console.log(str[i]);
//     if(['{','[','('].includes(str[i])){
//         console.log(str[i]);
//     }
// }