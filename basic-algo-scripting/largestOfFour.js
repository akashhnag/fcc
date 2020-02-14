let arr=[[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];
let max=0;let maxArr=[];

console.log(largestOfFour(arr));


function largestOfFour(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i][j]>max){
                max=arr[i][j];
            }
        }
        maxArr.push(max);
        max=0;
    }

    return maxArr;
  }
