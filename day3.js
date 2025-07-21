// variables declared outside any function is global scope
let x=10;
function SendMessage()
{
    let y=20;// function scope declared inside the function
    console.log("hai");
    console.log(x);//inside GLOBAL SCOPE
    console.log(y);// FUNCTION SCOPE
    
}
SendMessage();
console.log(x);//outside GLOBAL

function Check(){ //variable accessible within block of curly braces 
    if (true){
        let z=30;
        //access anywhere
    var iscloudy=true
        console.log(z);//BLOCK 
        console.log(iscloudy);
    }
    console.log(iscloudy);
}
Check();
//callback function is passed as an argument to another function and it is executed after completion
function First(){
     console.log("First function");
 }

 function Second(callback){
     console.log("Second function");
     callback()
     setTimeout(callback,2000);//runs for  particular time
     //setInterval(callback,1000);//runs multiple times
 }
 Second(First)


 //arrow function
 let count=0;
 let Input=()=>{
    count++;
    console.log(count);
    if(count<5){
        Input();
 }
 }
 Input()