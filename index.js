window.onload = function () {
    var carousel = document.getElementById("carousel");
    var list = document.getElementsByName("list")[0];
    var arr = list.getElementsByTagName("li");
    var height_array = [];
    var i = 0;
    move();
    window.setInterval(function () {
        move();
    }, 3000);
    function move() {
        if (typeof height_array[i] === "undefined")height_array[i] = arr[i].offsetHeight + (i - 1 >= 0 ? height_array[i - 1] : 0);
        carousel.style.height = arr[i].offsetHeight;
        list.style['margin-top'] = i > 0 ? -height_array[i - 1] : 0;
        if (i + 1 < arr.length)i++;
        else i = 0;
    }
}

