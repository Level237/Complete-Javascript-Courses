// Functions constructor

var john ={
    name:'John',
    yearOfBirth:1993,
    job:'teacher'
};

var Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge=function(){
        console.log(2016- this.yearOfBirth);
};

Person.prototype.lastName='Swith';

var john=new Person('John',1998,'teacher');
var mark=new Person('Mark',1979,'programmer');
var jane=new Person('Jane',1958,'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lastName);
