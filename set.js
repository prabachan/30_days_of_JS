
class Person {
    constructor(firstName, lastName, age, score,skill) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.score=score
      this.skill=[]
      
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkill(){
        return this.skill
    }
    set setScore(scores)
    {
        this.score +=scores
    }
    set setSkill(skills)
    {
        this.skill.push(skills)
    }
}

const prab=new Person('prabachan', 'basnet' ,23)
const prath =new Person('prathana' ,'basnet', 14)

console.log(prab)
console.log(prath)

prab.setScore=2
prab.setSkill='javascript'

prath.setScore=3
prath.setSkill='Python'

console.log(prab.score)
console.log(prab.score)

console.log(prath.skills)
console.log(prath.skills)
