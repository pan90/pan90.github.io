



function get_birthday() {
    // 1999年10月12日
    return new Date(1999, 9, 12);
}

function get_birthday_string() {
    var date = get_birthday();

    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();

    if (m < 10) m = "0" + m;
    if (d < 10) m = "0" + d;

    return y + "年" + m + "月" + d + "日";
}

function calc_age() {
    var now = new Date();
    var birthday = get_birthday();

    var d = now.getTime() - birthday.getTime();

    d /= 1000;  // 转换成秒
    d /= 60; // 转换成分
    d /= 60; // 准换成小时
    d /= 24; // 转换成天
    d /= 365; // 转化成年
    d = d.toFixed(2); // 四射五六到小数点后两位

    return d;
}







window.addEventListener("load", function () {
    var date = get_birthday();

    var birthday = document.getElementById("birthday");

    birthday.innerHTML = get_birthday_string();

    var age = document.getElementById("age");

    age.innerHTML = calc_age() + "岁";

});