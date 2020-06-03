function strip(x: string | number) {
    if (typeof x === 'number') {                //typeof
        return x.toFixed(2);
    }
    return x.trim;
}

class MyResponse {
    header = "response header"
    result = "response result"
}

class MyError {
    header = "response error"
    message = "response error message"
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {            //instanceof
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}
//==============================
type AlertType = 'success' | 'danger' | 'warning';
function setAlertType(type: AlertType) {
    //.....
}

setAlertType("success");
setAlertType("danger");
// setAlertType("default");      так не пройдет