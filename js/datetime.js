

window.addEventListener("load", function () {
    // 设置问候语
    var e = document.getElementById("greeting");
    var hello = "你好";
    var date = new Date();
    if (is_morning(date)) {
        hello = "早上好";
    } else if (is_afternoon(date)) {
        hello = "下午好";
    } else if (is_evening(date)) {
        hello = "晚上好";
    }
    e.innerText = hello;

    // 延时显示时间面板
    window.setTimeout(function () {
        document.getElementById("date_time").style.visibility = "visible";
    }, 1280);

    // 定时器
    window.setInterval(update_date_time, 1000);

});


// 判断时间是否是早上(06~12)
function is_morning(date) {
    var h = date.getHours();
    return h >= 6 && h < 12;
}


// 判断时间是否是下午(12~18)
function is_afternoon(date) {
    // 
    var h = date.getHours();
    return h >= 12 && h < 18;
}

// 判断时间是否是晚上
function is_evening(date) {
    var h = date.getHours();
    return h >= 18;
}

// 获取日期(格式: xx月xx日)
function get_date_string() {
    var now = new Date();

    var m = now.getMonth();
    var d = now.getDate();

    m += 1;

    return m + "月" + d + "日";
}


// 获取当前星期几
function get_weak_string() {
    var now = new Date();
    var day = now.getDay();
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var week = weeks[day];
    return week;
}

// 获取当前时间
function get_time_string() {

    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    // 补零
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    return String(h + ":" + m + ":" + s);
}

// 更新时间面板内容
function update_date_time() {
    // 时间
    var t = document.getElementById("clock_time");
    t.innerText = get_time_string();

    // 日期
    document.getElementById("date").innerText = get_date_string();

    // 星期     
    document.getElementById("weak").innerText = get_weak_string();
}