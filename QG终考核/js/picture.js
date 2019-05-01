/*轮播图*/ 
var wrap = document.querySelector(".wrap");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
next.onclick = function () {
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}
function next_pic () {
    index++;
    if(index > 4){
        index = 0;
    }
    showCurrentDot();
    var newLeft;
    if(wrap.style.left === "-4980px"){
        newLeft = -1660;
    }else{
        newLeft = parseInt(wrap.style.left)-830;
    }
    wrap.style.left = newLeft + "px";
}
function prev_pic () {
    index--;
    if(index < 0){
        index = 4;
    }
    showCurrentDot();
    var newLeft;
    if(wrap.style.left === "0px"){
        newLeft = -3320;
    }else{
        newLeft = parseInt(wrap.style.left)+830;
    }
    wrap.style.left = newLeft + "px";
}
var timer = null;
function autoPlay () {
    timer = setInterval(function () {
        next_pic();
    },2000);
}
autoPlay();

var container = document.querySelector(".Rotation-chart");
container.onmouseenter = function () {
    clearInterval(timer);
}
container.onmouseleave = function () {
    autoPlay();    
}

var index = 0;
var dots = document.getElementsByName("dots");
function showCurrentDot () {
    for(var i = 0, len = dots.length; i < len; i++){
        dots[i].className = "";
    }
    dots[index].className = "on";
}

for (var i = 0, len = dots.length; i < len; i++){
    (function(i){
        dots[i].onclick = function () {
            var dis = index - i;
            if(index == 4 && parseInt(wrap.style.left)!==-4980){
                dis = dis - 5;     
            }
            //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
            if(index == 0 && parseInt(wrap.style.left)!== -830){
                dis = 5 + dis;
            }
            wrap.style.left = (parseInt(wrap.style.left) +  dis * 600)+"px";
            index = i;
            showCurrentDot();
        }
    })(i);            
}
/*登录注册*/
function Show(){
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('modal').classList.remove('hide');
}
 function Hide(){
    document.getElementById('shade').classList.add('hide');
    document.getElementById('modal').classList.add('hide');
}
function ShowTwo(){
    document.getElementById('a').classList.remove('hide');
    document.getElementById('b').classList.remove('hide');
}
 function HideTwo(){
    document.getElementById('a').classList.add('hide');
    document.getElementById('b').classList.add('hide');
}
/*纵向菜单*/
window.onload = hoversee;
function hoversee(){
    var list = document.getElementById('service');
    var zu = list.getElementsByTagName("li");
    for(var i=0;i<10;i++)
    {
        zu[i].onmouseover = function(){
            this.getElementsByTagName('dl')[0].style.display = "block";
        }
        zu[i].onmouseout = function(){
            this.getElementsByTagName('dl')[0].style.display = "none";
        }
    }
}
