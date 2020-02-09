; var moudle = (function () {
    var obj = {};
    var aa = 123;
    function sum(){
        return 1;
    }

    obj.aa = aa;
    obj.sum = sum();
    return obj
})()

nodejs
moudle.exports = {
    flag: true,
    sum: sum
}

let aa = require('./aaa.js')
flag = aa.flag

let {flag, sum} = require('./aaa.js')


es6
// export,import
