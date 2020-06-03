var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return name + " version = " + this.version; //заключаем в тильду `
    };
    return Typescript;
}());
var typescript = new Typescript("1.0");
console.log(typescript.info("rusfrance"));
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.setName = function (name) {
        this.name = name;
    };
    return Car;
}());
