// 你给元素设置一个id，然后先隐藏，调用这个函数，就可以展示出来
// 把id传进去
// 关闭按钮，设置id为
// login_close
// 就可以关闭了
// 你可以看看这个函数
function showid(idname){

var isIE = (document.all) ? true : false;
var isIE6 = isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
var newbox=document.getElementById(idname);
newbox.style.zIndex="199999";
newbox.style.display="block";
newbox.style.position = !isIE6 ? "fixed" : "fixed";
newbox.style.top =newbox.style.left = "50%";
newbox.style.marginTop = - newbox.offsetHeight / 2 + "px";
newbox.style.marginLeft = - newbox.offsetWidth / 2 + "px";
newbox.style.backgroundColor="white";
var layer=document.createElement("div");
//layer.id="layer";
var closediv=document.createElement("div");
 closediv.setAttribute("id","layer");
document.body.appendChild(closediv);
 var qux2=document.getElementById('login_close');

layer.style.width=layer.style.height="100%";

layer.style.position= !isIE6 ? "fixed" : "fixed";
layer.style.top=layer.style.left=0;
layer.style.backgroundColor='#000000';//弹出框颜色
layer.style.zIndex="199998";
layer.style.opacity="0.5";
document.body.appendChild(layer);
var sel=document.getElementsByTagName("select");
for(var i=0;i<sel.length;i++){
sel[i].style.visibility="hidden";
}

function layer_iestyle(){
layer.style.width=Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth)
+ "px";
layer.style.height= Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) +
"px";
}

function newbox_iestyle(){
newbox.style.marginTop = document.documentElement.scrollTop - newbox.offsetHeight / 2 + "px";
newbox.style.marginLeft = document.documentElement.scrollLeft - newbox.offsetWidth / 2 + "px";
}

if(isIE){layer.style.filter ="alpha(opacity=60)";}
if(isIE6){
layer_iestyle()
newbox_iestyle();
window.attachEvent("onscroll",function(){
newbox_iestyle();
})
window.attachEvent("onresize",layer_iestyle)
}

closediv.onclick=function(){newbox.style.display="none";layer.style.display="none";for(var i=0;i<sel.length;i++){
sel[i].style.visibility="visible";
}}

qux2.onclick=function(){ newbox.style.display="none";layer.style.display="none";for(var i=0;i<sel.length;i++){
sel[i].style.visibility="visible";
};

   }
}


