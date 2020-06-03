var rect1 = {
    id: "123",
    size: {
        width: 12,
        height: 12
    }
};
rect1.color = "blue";
var rect2 = {};
var rect3 = {};
var rect5 = {
    id: "123",
    size: {
        width: 12,
        height: 12
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: "1px solid black",
    margin: "2px"
};
