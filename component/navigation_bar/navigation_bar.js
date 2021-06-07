


window.addEventListener("load", function () {

    var nav = document.getElementsByClassName("nav_top");
    if (nav.length == 0) {
        nav = '<nav class="nav_top"> <ul class="width"> <li><a href="./index.html">首页</a></li> <li class="has_submenu"><a href="javascript:;">编程</a> <ul class="submenu"> <li><a href="./study_website.html">学习网站推荐</a></li> <li><a href="./study_python.html">Python 资源</a></li> </ul> </li> <li><a href="./resume.html">简历</a></li> <li><a href="./picture.html">图片</a></li> <li><a href="./music.html">音乐</a></li> <li><a href="./movie.html">电影</a></li> <li><a href="./software.html">软件</a></li> <li class="has_submenu"><a href="javascript:;">工具</a> <ul class="submenu"> <li><a target="_blank" href="./gaokao_countdown.html">高考倒计时</a></li> <li><a target="_blank" href="./youdaodict.html">单词发音</a></li> <li><a target="_blank" href="//www.emojidaquan.com/">Emoji大全</a></li> <li><a target="_blank" href="//www.user-agent.cn/">UA检测</a></li> <li><a target="_blank" href="//color.oulu.me/">CSS渐变背景</a></li> </ul> </li> </ul> </nav>';
        document.body.innerHTML = nav + document.body.innerHTML;
    }
    else {
        console.log("页面中已经存在nav_top");
    }

});