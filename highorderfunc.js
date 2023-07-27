const callback= (a,b)=> {
    return a+b
    
}

function sum(callback, a,b)
{
    return callback(a,b)+a+b 
}

console.log(sum(callback,3,4))

//returning function

const higherOrder=n=>{
    const doSomething=m=>{
        const doWhatEver=t=>{
            return 2*n+3*m+t
        }
        return doWhatEver
    }
    return doSomething
}
console.log('returning function')
console.log(higherOrder(2)(5)(10))

function repeat(){
    console.log('hello')
}
// setInterval(repeat, 1000)
// stop

console.log('helloworld')
