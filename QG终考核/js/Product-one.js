/*点击放大显示图片*/
function show(one,two,three) {    
    var li01 = document.getElementById(one);  
    var pic = document.getElementById("pic");    
    var picBig = document.getElementById("picBig");
    
    li01.onmouseover = function() {
        pic.src = two;                // 把参数2设为大图的src
        picBig.src = three;            //把参数3设为放大图的src
    }
    
}   
show("li01","../image/container-one/shirt-one.jpg","../image/container-one/shirt-one-b.jpg");
show("li02","../image/container-one/shirt-two.jpg","../image/container-one/shirt-two-b.jpg");
show("li03","../image/container-one/shirt-three.jpg","../image/container-one/shirt-three-b.jpg");
show("li04","../image/container-one/shirt-four.jpg","../image/container-one/shirt-four-b.jpg");
show("li05","../image/container-one/shirt-five.jpg","../image/container-one/shirt-five-b.jpg");

/*放大镜*/
    var min = document.querySelector(".big-picture");
    var max = document.querySelector(".bigger");
    var enlarge = document.querySelector(".fd");
    var img = document.querySelector(".bigger img");
    var information = document.querySelector(".information");

    min.onmouseover = function () {
        // 1.鼠标覆盖显示max和enlarge
        max.style.display = "block";
        enlarge.style.display = "block";
        information.style.marginTop = "-420px";
    }
    // 2.enlarge的移动范围
    min.onmousemove = function () {
        // 鼠标触摸的点
        var x = event.pageX - min.offsetLeft - enlarge.offsetWidth / 2; 
        var y = event.pageY - min.offsetTop - enlarge.offsetHeight / 2;
        // 最大移动距离
        var maxX = min.clientWidth - enlarge.offsetWidth;
        var maxY = min.clientHeight - enlarge.offsetHeight;
        // 边界判断
        if (x <= 0) {
            x = 0;
        } else if (x >= maxX) {
            x = maxX;
        }
        if (y <= 0) {
            y = 0;
        } else if (y >= maxY) {
            y = maxY;
        }
        // enlarge的位置
        enlarge.style.left = x + "px";
        enlarge.style.top = y + "px";
        // 移动比例 (enlarge/min = max/img)
        var yidongX = x / maxX;
        var yidongY = y / maxY;
        // 3.max的对应显示
        img.style.left = yidongX * (max.clientWidth - img.offsetWidth) + "px";
        img.style.top = yidongY * (max.clientHeight - img.offsetHeight) + "px";
    }
    // 离开时隐藏
    min.onmouseout = function () {
        max.style.display = "none";
        enlarge.style.display = "none";
        information.style.marginTop = "0px";
    }


/*最右侧推荐框*/ 
var wrap = document.querySelector(".ulmove");
var next = document.querySelector(".arrow_down");
var prev = document.querySelector(".arrow_up");
next.onclick = function () {
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}
function next_pic () {
    var newTop;
    if(wrap.style.marginTop === "-954px"){
        newTop = 0;
    }else{
        newTop = parseInt(wrap.style.marginTop)-477;
    }
    wrap.style.marginTop = newTop + "px";
}
function prev_pic () {
    var newTop;
    if(wrap.style.marginTop === "0px"){
        newTop = -954;
    }else{
        newTop = parseInt(wrap.style.marginTop)+477;
    }
    wrap.style.marginTop = newTop + "px";
}



/*登录注册弹出框*/
function Show() {
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('modal').classList.remove('hide');
}
 function Hide() {
    document.getElementById('shade').classList.add('hide');
    document.getElementById('modal').classList.add('hide');
}
function ShowTwo() {
    document.getElementById('a').classList.remove('hide');
    document.getElementById('b').classList.remove('hide');
}
 function HideTwo() {
    document.getElementById('a').classList.add('hide');
    document.getElementById('b').classList.add('hide');
}
 