function truncateString(str, num) {
    if(num>=str.length){

        return str;
    }
    else{


        str=str.substring(0,num)+'...';
        return str;
    }

  }

  //truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
