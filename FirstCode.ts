// Functions Section
function About():{name:string, class:number}{
    return {name:"hashir", class:10}
}
console.log(About().class)


let car = (name:string , color:string , model:number)=> {
    name = "Civic";
    color = "Black";
    model = 2022;
}

console.log(car);


//Type Section
type UserId = {
    name:string,
    e_mail:string,
    contact:number
}

function data(Id:UserId){
    return Id;
}
data({name:"hashir", e_mail:"H@.com", contact:924598238})


// Array Section 

let MarvelHeors : string[] = ["IronMan", "Captin America"];
console.log(MarvelHeors);


let DCHeroes : string[] = ["SuperMan", "BatMan"];
console.log(DCHeroes);


type login = {
    name: string,
    password:number
}

let Login: login[] = []

Login.push({name:"Hashir", password:12345})
console.log(Login)

//Union Section

let Idpassword: string | number = "hashir32";
Idpassword = 32;


let Mydata: (string | number)[] = ["hashir Ali", 32];
console.log(Mydata);


//Tuple Section

let VistorData: [string, number] = ["hashir", 32] 

export {}