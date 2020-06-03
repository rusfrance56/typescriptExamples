interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person //'name', 'age'
let key: PersonKeys = 'name';
key = 'age';


type User = {
    id: number
    name: string
    age: number
    email: string
}

type UserWithoutFields1 = Exclude<keyof User, 'id' | 'age'> //останутся поля name, email
type UserWithoutFields2 = Pick<User, 'name' | 'email'> //останутся поля name, email

let newUser: UserWithoutFields1 = 'name';
// let newUser2: UserWithoutFields1 = 'id';    так не прокатит
