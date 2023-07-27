class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
get getAge(){
    return this.age
}
}
const prab=new Person('prabachan', 'basnet' ,23)
const prath =new Person('prathana' ,'basnet', 14)

console.log(prab)
console.log(prath)

console.log(prab.getAge)
console.log(prath.getAge)