class Typescript {
    version: string

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `${name} version = ${this.version}` //заключаем в тильду `
    }
}

const typescript: Typescript = new Typescript("1.0");
console.log(typescript.info("rusfrance"));

class Car {

    constructor(private name: string) { //создаст поле name в классе

    }

    public setName(name: string) {
        this.name = name;
    }
}