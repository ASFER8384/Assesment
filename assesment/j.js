let n = 5;
let q = 3;
let number = [1, 1, 1, 1, 1];
let uviInput = [[1, 3], [2, 4], [3, 4]];
let result = [];
for(let i = 0;i < q;i++)
   result.push(Math.min(...number.slice(uviInput[i][0], uviInput[i][1])));
console.log(result);
for(let i=0;i<result.length;i++){
    console.log(result[i])
}