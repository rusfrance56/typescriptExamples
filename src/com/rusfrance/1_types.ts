const str: string = "test string";
const isLoading: boolean = true;
const intDigit: number = 11;
const floatDigit: number = 4.2;

const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3, 4, 5];

//Tuple type (несколько типов)
const numberArray3: [string, number] = ["Egor", 500.00];

//Any (любой тип)
let variable: any = 42;
variable = "test string";

//========== (без возвращаемого значения)
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName("Ruslan");

//Never (если будет выброшена ошибка или мы не сможем получить результат)
function throwError(msg: string): never {
    throw new Error(msg);
}

function infinite(): never {
    while (true) {
    }
}

//Type
type Login = string;
const login: Login = "admin";
// const login2: Login = 2; - так уже не прокатит

type ID = string | number;
const id1: ID = "1123123";
const id2: ID = 123123;

type SomeType = string | null | undefined;


for (let i = 0; i<5; i++){
    console.log(i);
}



