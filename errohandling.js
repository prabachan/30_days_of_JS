try{
    let lastname='basnet'
    let fullname =firstname+' '+lastname
}
catch(err)
{
    console.log(err)
    console.log('name of error', err.name)
    console.log('error message' , err.message,)
}
finally{
    console.log('in case it would be executed')
    
}