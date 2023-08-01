async function fetchStreet(){
    try{
        const response=await fetch('https://randomuser.me/api/')
        const data=await response.json()
        return data

    }
catch(error){
    console.error(error)
}
}

async function printStreet(){
    const streetData =await fetchStreet()
    const streetName= streetData.results.map(user=>user.location.street.name)
    console.log(streetName)
}
printStreet()