/*点击放大显示图片*/
function show(one,two) {    
    var li01 = document.getElementById(one);  //one为小图片的id,two为大图片的src
    var pic = document.getElementById("pic");    // pic为大图片div的id
    
    li01.onmouseover = function() {
        pic.src = two;                // 把参数2设为新的src(路径)
    }
    
}   
show("li01","../image/shirt-one.jpg");
show("li02","../image/shirt-two.jpg");
show("li03","../image/shirt-three.jpg");
show("li04","../image/shirt-four.jpg");
show("li05","../image/shirt-five.jpg");

/*登录注册*/
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
 