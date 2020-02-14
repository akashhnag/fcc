//confirm ending


function confirmEnding(str, target) {
    let a=str.substring((str.length)-(target.length))
    if(a===target){
        return true
    }
    else{
        return false
    }
    //return str;

  }

  //confirmEnding("Bastian", "n");
  confirmEnding("Congratulation", "on")
