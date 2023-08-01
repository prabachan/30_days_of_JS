function fetchFirstname(){
    return fetch('https://randomuser.me/api/')
    .then(response=>response.json())
    .catch(error=>(console.error(error)))
}

function printFirstNames(){

    fetchFirstname()
    .then(userData =>{
        const firstName= userData.results.map(results=>results.name.first)
        console.log('first Name:', firstName)
    })
}

printFirstNames()