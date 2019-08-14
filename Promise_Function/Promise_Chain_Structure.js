const square = (data) => {
    return new Promise((resolve, reject) =>{
        if(data < 500)
            resolve(data * data);
        else
            reject("değer 500 ü geçti");    
    })
};

square(2)
    .then((data) =>{
        console.log(data);
        return square(data);
    })
    .then((data) =>{
        console.log(data);
        return square(data);
    })
    .catch((err) =>{
        console.log(err);
    })

    // 500 den küçükse, istediğim değerin 2 kere karesini alıcak