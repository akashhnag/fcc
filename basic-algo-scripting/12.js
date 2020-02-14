function frankenSplice(arr1, arr2, n) {

    arr1.splice(n-1,0,arr2[n-1]);
    arr2.splice(n-1,1);
    arr1.splice(arr1.length-1,0,arr2)
    console.log(arr2);
    console.log(arr1);
    //console.log(arr2.slice());

    //return arr2;
  }

  frankenSplice([1, 2, 3], [4, 5, 6], 1);
