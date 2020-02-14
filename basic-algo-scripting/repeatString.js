function repeatStringNumTimes(str, num) {
    if(num<0){
        return '';
    }
    else{
        let a='';
        while(num>0){
            a+=str;
            num--;
        }
        return(a);

    }
  }

  repeatStringNumTimes("abc", 3);
