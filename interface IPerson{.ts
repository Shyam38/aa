interface IPerson{
    firstname:string,
    lastname:string

    sayHi():string;
}

let m : IPerson = {
    firstname:"M",
    lastname:"T",

    sayHi():string{
        return "Hello from M";
    }
}

let p : IPerson = {
    firstname:"P",
    lastname:"T",

    sayHi():string{
        return "Hello from P";
    }
}


console.log(m.sayHi());
console.log(p.sayHi());
