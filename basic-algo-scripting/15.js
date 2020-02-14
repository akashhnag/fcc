function mutation(arr) {
    let c=0;
    for(let i=0;i<arr[0].length;i++){
        for(let j=0;j<arr[1].length;j++){
            if(arr[0][i].toLowerCase()===arr[1][j].toLowerCase()){
                c++;
                break;
            }
        }
    }
    if(c===arr[0].length){
        console.log(c,'true');

        //return true
    }
    else if(c===arr[1].length){
        console.log(c,'2nd true');
    }
    else{
        console.log(c);
        //return false;
    }

  }

  mutation(["floor", "for"])
  mutation(["for", "floor"])
