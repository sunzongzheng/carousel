window.onload = function () {
    var main = document.getElementById("carousel"),
        list = document.getElementById("list"),
        arr = document.getElementsByTagName("li"),
        h_array = [],
        i = 0;
    move();
    window.setInterval(function () {
        move();
    }, 3 * 1000);
    function move() {
        //如果没有需要轮播的item
        if (arr.length < 1)return;
        //递推存储
        if (typeof h_array[i] === "undefined")h_array[i] = arr[i].offsetHeight + (i - 1 >= 0 ? h_array[i - 1] : 0);
        //设置当前main元素的高度为当前要显示的item的高度
        main.style.height = arr[i].offsetHeight;
        //设置list的marginTop值，使正好显示只当前item
        list.style.marginTop = i > 0 ? (-h_array[i - 1] + "px") : 0;
        if (i + 1 < arr.length)i++;
        else i = 0;
    }
}