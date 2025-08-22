let current=new Date();
let day=current.getDay()
console.log(current)// universal time
console.log(current.toString());//local time
console.log(day)

//creating class,constructor,object
class Sample{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    }
}
let result=new Sample("JS")

class bank{
    constructor(intialamount=0){
        this._balance=intialamount;
    }
    get balance(){
        return this._balance;
    }
    //checking balance
    set balance(amount){
        if(amount>0){
            this._balance+=amount;
            console.log(amount);
        }
    }
}
let a=new bank(1000);
console.log(a)

a.balance=100;
console.log(a)