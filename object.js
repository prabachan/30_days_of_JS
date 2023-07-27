const rectangle={
    length:10,
    breadth:5,
}
console.log(rectangle)

//getting values from the object

const person={
    firstname:'prabachan',
    lastname:'Basnet',
    country:'Usa',
    city:'newyork',
    skills:['html', 'css' , 'javascript'],
    getfullname:function(){
        return `${this.firstname} ${this.lastname}`
    },

}

console.log(person.firstname)
console.log(person.lastname)
console.log(person.age)

console.log(person['firstname'])

console.log(person.getfullname())

//modifying the content of object as it  can be modified after it is creaated

person.age=23
person.nationality='nepali'

const copyPerson=Object.assign({},person)
console.log(copyPerson)

const keys= Object.keys(copyPerson)
console.log(keys)
 const skills=Object.keys(copyPerson.skills)
 console.log(skills)
 
//getting object values

const values=Object.values(copyPerson)
console.log('values/n'
)
console.log(values)


