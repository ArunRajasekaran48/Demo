//Primitive Datatypes
a="SECE"
console.log(a)
b=true
console.log(b)
//Checking the type of variable
console.log(typeof(a))
console.log(typeof(b))
//Non Primitive Datatypes 
arr=['a',10,true,[20,30],"SECE"]
console.log(arr)
console.log(typeof(arr))
//1st Way
obj={
    firstname:"Sri",
    lastname:"Eshwar"
}
console.log(obj)
console.log(typeof(obj))
console.log(obj["lastname"])
//2nd way 
obj1={}
console.log(obj1)
obj1["dept"]="CSE"
obj1["sec"]="A"
console.log(obj1)
//3rd Way 
obj2=new Object()
console.log(obj2)
obj2.count=70
obj2.abs=1
totalpresent=obj2.count-obj2.abs
console.log("Present:"+totalpresent)
console.log(obj2)
set =new Set(['Hello',1,2,'sece'])
console.log(typeof(set))
console.log(set)