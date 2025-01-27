// //ES6 ECMA script standard 6
// //1.variable declarations ->refer variables.js

// //2.scope
// //->var-
// // ->let-local/block scope
// // ->const-global scope
// var a=20
// const con=3.14
// console.log(a)
// console.log(con)
// {
//     var a=20
//     let b=30
//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// console.log(con)
// console.log(b)

//class and object
// class ClassEg
// {
//     constructor()
//     {
//     this.a=10
// }
// //arrow functions
// funInclass = ()=>
// {
//     console.log(this.a)
// }
// }
// obj=new ClassEg()
// console.log(obj.a)
// console.log(obj.funInclass())

//5.Ternary operator 
// a=10
// console.log((a%2==0)?"Even":"Odd")

//6/spread operator
// a=[10,20,30,40]
// b=[50,60,70]
// c=[...b,...a]
// console.log(c)

//7.rest operator[...]
function restOpeg(a,b,...arg)
    {
        console.log(a)
        console.log(b)
        console.log(arg)
    }
    restOpeg(10,20,30,40,50)
    