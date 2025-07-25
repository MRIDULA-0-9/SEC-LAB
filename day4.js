let details={ //object
    name:"js",//key,value
    total_mark:"100",//key,value
    subject:{
        dbms:100,
        java:90
    },
    sum:function(){ //object inside the function
        let total=this.subject.dbms+this.subject.java;// to add two values
        return total;
    }
}
console.log(details.name);
console.log(details["total_mark"]);//to call key use double quots to print

//calling nested object
console.log(details.subject.dbms);
console.log(details.subject["java"]);

//calling obect inside function
console.log(details.sum());

// object destructure is a syntax that allows to extract values from object and assign them to variables in clean and readable way
let person={
    job:"SoftwareTester",
    salary:25000,
}
const{job:firstkey,salary:secondkey}=person
console.log(firstkey+" "+secondkey);

//calling array-first way
let arr=new Array(1,2,"three");
console.log(arr[2]);

//second way
let arr2=["js",true];
console.log(arr2[0]);

//array destructure
const[sub,b1]=arr2;
console.log(sub)

//filter-returns a new array containing only elemnts that match a condition
let student=[
    {Name:"Mridula",grade:"A"},
    {Name:"Vikashini",grade:"A+"}
]
let gradestudent=student.filter(student=>student.grade==="A")
console.log(gradestudent);

//changes the original array by adding/removing items at a specifix index
let names=["Asha","Bala","Charan"];
names.splice(1,1,"David"); //remove 1 item at index 1,insert "David"
console.log(names);

