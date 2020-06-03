function strip(x) {
    if (typeof x === 'number') { //typeof
        return x.toFixed(2);
    }
    return x.trim;
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = "response header";
        this.result = "response result";
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = "response error";
        this.message = "response error message";
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) { //instanceof
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
    //.....
}
setAlertType("success");
setAlertType("danger");
// setAlertType("default");      так не пройдет
