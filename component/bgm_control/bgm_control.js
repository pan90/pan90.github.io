

window.addEventListener("load", function () {

    var c = document.getElementsByClassName("bgm_control")[0];

    var text = document.createElement("span");
    text.innerText = "▶️";
    c.appendChild(text);


    var e = c.getElementsByTagName("audio")[0];

    // 播放指定的音乐
    function play() {
        playedPromise = e.play();
    }

    function pause() {
        e.pause();
    }

    // 添加点击事件
    text.addEventListener("click", function () {
        if (e.paused) {
            // alert("暂停中");
            play();
        } else {
            // alert("播放中");
            pause();
        }
    });

    // ▶️
    // ⏸️

    e.addEventListener("playing", function () {
        // console.log("播放中");
        // 改变相应样式
        text.innerText = "⏸️";
    });

    e.addEventListener("pause", function () {
        // console.log("已暂停");
        // 改变相应样式
        text.innerText = "▶️";
    });
});
