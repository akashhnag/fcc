function titleCase(str) {
    let a='';
    a+=str[0].toUpperCase();
    for(let i=1;i<str.length;){
        if(str[i]===' '){
            a+=str[i];
            a+=str[i+1].toUpperCase();
            i+=2;
        }
        else if(str[i]===str[i].toUpperCase()){
            a+=str[i].toLowerCase();
            i++;
        }
        else{
            a+=str[i];
            i++;
        }

    }
    return(a);
}

//titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt")
