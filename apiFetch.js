const url = 'https://randomuser.me/api'
fetch(url)
.then(response=> response.json())
.then(data=>{
  console.log(data)
})

.catch(error=>console.error())