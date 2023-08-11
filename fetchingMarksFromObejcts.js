const marks={ //this is object
prabachan:90,
ishan:55,
pritam:69,
rishav:32,
dost:80
}

// //traditional method
// for(let i=0; i<=Object.keys(marks).length;i++)
// {
//     console.log('The marks of '+ Object.keys(marks)[i] + ' is ' + marks[Object.keys(marks)[i]])
// }

//easy way to do it

for(let key in marks){
    console.log('the marks of' + key 'is' + key[marks])
}
