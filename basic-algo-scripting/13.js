function bouncer(arr) {
    let a=[];
    arr.forEach(element => {
        if(Boolean(element)){
            a.push(element);
        }
    })
    return(a);

  }

  bouncer([7, "ate", "", false, 9]);
