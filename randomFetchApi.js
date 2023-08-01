function fetchFirstname(){
    return fetch('https://randomuser.me/api/')
    .then(response=>response.json())
    .catch(error=>(console.error(error)))
}

function printFirstNames(){

    fetchFirstname()
    .then(userData =>{
        const firstName= userData.results.map(results=>results.name.first)
        const lastName= userData.results.map(results=>results.name.last)
        const fullName= firstName+ ' ' + lastName
        console.log(fullName)
        
        
})
}

printFirstNames()