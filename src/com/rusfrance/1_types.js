var str = "test string";
var isLoading = true;
var intDigit = 11;
var floatDigit = 4.2;
var numberArray = [1, 2, 3, 4, 5];
var numberArray2 = [1, 2, 3, 4, 5];
//Tuple type (несколько типов)
var numberArray3 = ["Egor", 500.00];
//Any (любой тип)
var variable = 42;
variable = "test string";
//========== (без возвращаемого значения)
function sayMyName(name) {
    console.log(name);
}
sayMyName("Ruslan");
//Never (если будет выброшена ошибка или мы не сможем получить результат)
function throwError(msg) {
    throw new Error(msg);
}
function infinite() {
    while (true) {
    }
}
var login = "admin";
var id1 = "1123123";
var id2 = 123123;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
