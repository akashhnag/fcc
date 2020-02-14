function chunkArrayInGroups(arr, size) {
    let a=[];let c=0;
    for(let i=0;i<parseInt(arr.length/size);i++){
        a.push(arr.slice(c,size));
        c+=size;
        size+=size;
    }

    console.log(a);

  }

  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
