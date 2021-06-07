
// 这个js用于实现轮播图功能

// 实现轮播图功能
window.addEventListener("load", function () {

    var timer_auto_next = null;
    // var timer_move = null;

    // 检查轮播图的图片数量

    // 轮播图容器
    var p = this.document.getElementById("slideshow_wrapper");

    p.addEventListener("mouseover", function () {
        if (timer_auto_next) {
            window.clearInterval(timer_auto_next);
            timer_auto_next = null;
        }

    });

    p.addEventListener("mouseout", function () {
        auto_next();
    });

    document.getElementById("button_next").addEventListener("click", function () {
        // console.log("click");
        move_to_next();
    });

    // 获取所有图片
    var all = p.querySelectorAll("ul>li>img");

    // 三个下标
    var index_current = 0;
    var index_next = 1;
    var index_previous = all.length - 1;

    // 直接第几张显示图片
    all[index_current].parentElement.style.visibility = "visible";

    // 轮播到下一张图片, 向左边移出当前图片, 从右边移入下一张图片
    function move_to_next() {
        var delta = 8;

        var current = all[index_current].parentElement; // 当前图片的容器
        var next = all[index_next].parentElement; // 下一张图片的容器

        // 设置可见
        current.style.visibility = "visible";
        next.style.visibility = "visible";

        // 设置位置
        current.style.left = "0px";
        next.style.left = current.offsetWidth + "px";


        // 开始同时移动
        var timer = window.setInterval(function () {
            var current_left = current.offsetLeft;
            var next_left = next.offsetLeft;

            if (next_left < delta) {
                delta = 1;
            }

            current_left -= delta;
            next_left -= delta;

            current.style.left = current_left + "px";
            next.style.left = next_left + "px";

            // 切换完成
            if (next.offsetLeft == 0) {
                // 清除定时器
                window.clearInterval(timer);

                // 修改下标
                index_current++;
                index_current %= all.length;
                index_next++;
                index_next %= all.length;
                index_previous++;
                index_previous %= all.length;
            }

        }, 1);
    };


    function auto_next() {
        if (timer_auto_next == null) {
            timer_auto_next = window.setInterval(move_to_next, 3000);
        }
    };

    auto_next();
});

