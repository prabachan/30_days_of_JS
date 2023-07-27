class person{
    constructor(
        firstName='prabachan',
        lastName='basnet',
        age=23
    ){
   this.firstName=firstName
    this.lastName=lastName
    this.age=age
    }
 getFullName() {
        console.log(this.firstName +'' + this.lastName)
    
    }
    
}
const prab=new person()
const prath = new person('prathana','basnet','14')


console.log(prab)
console.log(prath)

prab.getFullName()