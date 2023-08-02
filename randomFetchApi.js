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
// printFirstNames()


// const fetchRandomUser = () => fetch('https://randomuser.me/api/')
//     .then(response => {
//         const data = response.json()
//         return data.results
//     })
//     .catch(error => console.error(error))
//     // .finally(() => loading = false)

// const listUsernames = () => fetchRandomUser().then((data) => data.map((item) => {
//     const name = item.name;

//     return ({
//         fullName: `${name.first} ${name.last}`
//     })
// }))

// const printUsernames = listUsernames.then((data) => data.map((item) => console.log(item.fullName)))

// printUsernames();