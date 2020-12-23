class Person{
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;

    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
    getGreeting(){
        return `Hi  I am ${this.name}`
    }
}
class Traveller extends Person{
    constructor(name,age,homelocation){
        super(name,age)
        this.homelocation=homelocation;
    }
    hashomelocation(){
        return !!this.homelocation
    }
    getGreeting(){
        let greeting=super.getGreeting()
        if(this.hashomelocation()){
            greeting+=`I visiting in ${this.homelocation}`
        }
        return greeting;

    }
}
const me=new Traveller('Hamza Ansari',20,'Bulandshahr')
console.log(me.getGreeting())
const you=new Traveller('Gulshan',19,'Bulandshahr')
console.log(you.getGreeting())
const other=new Traveller()
console.log(other.getGreeting())