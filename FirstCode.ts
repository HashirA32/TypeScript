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


type Vlogin = {
    name: string,
    password:number
}

let VLogin: Vlogin[] = []

VLogin.push({name:"Hashir", password:12345})
console.log(VLogin)

//Union Section

let Idpassword: string | number = "hashir32";
Idpassword = 32;


let Mydata: (string | number)[] = ["hashir Ali", 32];
console.log(Mydata);


//Tuple Section

let VistorData: [string, number] = ["hashir", 32] 

// Enum Section

const enum seatChoice {
    windowSeat = "Window Seat granted",
    middleSeat = "middle Seat granted",
    lastSeat = "last Seat granted"
}

let mySeat = seatChoice.middleSeat;

console.log(mySeat)


interface logIn {
     email: string;
    password: number;
}
interface SingUp extends logIn {
    name: string;
    age: number;
    username:string;
}



let UserLogIn : SingUp = {
    name:"hashir",
    password:12334,
    username:"hasdh",
    email:"ajsdhsk",
    age:24
}
export {}