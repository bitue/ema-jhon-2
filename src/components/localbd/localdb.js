let obj={}

const checkLocal = () => {
    if(localStorage.getItem('cart')){
        return JSON.parse(localStorage.getItem('cart'))
    }
    else{
        return {}
    }
}

const arrayToObject = (keyArray) => {
    for(let i of keyArray){
        if(Object.keys(obj).length===0){
            obj[i]=1;
        }
        else{
            if(Object.keys(obj).includes(i)){
                obj[i]=obj[i]+1
            }
            else{
                obj[i]=1;
            }
        }

    }
    let newObj = {...obj}
    for(let i in obj){
        delete obj[i]
    }
    localStorage.setItem('cart',JSON.stringify(newObj))

   console.log(obj,newObj)

   return newObj
}



export {arrayToObject}

