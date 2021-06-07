


//  文档加载完成后完成跑马灯的初始化
window.addEventListener("load", function () {

    // 获取跑马灯元素
    var e = document.getElementById("marquee");


    // 设置父容器的样式
    {
        e.parentElement.style.overflow = "hidden";
    }

    // 跑马灯元素的样式
    {
        // 必须使用相对定位
        e.style.position = "relative";
        // 设置初始位置, 将偏移量设置为父容器的宽度
        e.style.left = e.parentElement.offsetWidth + "px";
        // 设置可见
        e.style.visibility = "visible";
    }

    // 跑马灯的滚动效果
    window.setInterval(() => {

        // 获取跑马灯元素
        var e = document.getElementById("marquee");

        // 获取当前的left的值
        var left = e.style.left; // "??px"
        left = left.slice(0, -2); // 去掉"px"
        left = parseInt(left); // 转化为整数

        // 需要将字符串转换为整数

        // 判断是否到达开头(left小于某个负值(-自身宽度)的时候应该重新回到末尾)
        if (left < -e.offsetWidth) {
            // left设置为它的父容器的宽度
            left = e.parentElement.offsetWidth;
        }

        e.style.left = (left - 1) + "px";

    }, 8);
});
