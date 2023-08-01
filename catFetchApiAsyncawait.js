async function fetchCatData(){
    try{
        const response = await fetch('https://api.thecatapi.com/v1/breeds')
        const dataa =await response.json();
        return dataa
    }
    catch(error){
        console.error(error)
    }
}

async function printCatNames(){
    const catData =await fetchCatData()
    const catNames= catData.map(cat => cat.name)
    console.log(catNames)
}

printCatNames()