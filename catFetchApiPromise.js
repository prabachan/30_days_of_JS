//function to fetch api
function fetchCatData(){
return fetch('https://api.thecatapi.com/v1/breeds')
.then(response => response.json())
.catch(error=>(console.error(error)))
}

//Printing the catNames
function printCatNames(){
    fetchCatData()
    .then(catData => {
        const catNames =catData.map(cat =>cat.name)
        console.log('Cat Names:', catNames)
    }
        )
}

printCatNames()


