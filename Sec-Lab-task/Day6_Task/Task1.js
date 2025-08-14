//creating an array
let employee=[];
function contact(name,phone,email){
        employee.push({name,phone,email})
}
contact(
    {name:"Mridula",
    phone:6381915739,
    email:"mridula@gmail.com"},
    {name:"Meghna",
    phone:6381915738,
    email:"meghna@gmail.com"},
     
);
for(let emp of employee){

// Dot notation
console.log("Name(dot):",emp.name);
console.log("Phone(dot):",emp.phone);
console.log("Email(dot):",emp.email);

// Bracket notation
console.log("Name(bracket):",emp["name"]);
console.log("Phone(bracket):",emp["phone"]);
console.log("Email(bracket):",emp["email"]);

}
