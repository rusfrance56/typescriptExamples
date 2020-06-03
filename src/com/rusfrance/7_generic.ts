 const arrayOfNumbers: Array<number> = [1,1,2,3,4 ];

function reverse<T>(array: T[]): T[] {    // метод для разных типов массивов
    return array.reverse();
}