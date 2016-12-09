function getNextElement(node){
    if(node.nextSibling.nodeType == 1){    //判断下一个节点类型为1则是“元素”节点
        return node.nextSibling;
    }
    if(node.nextSibling.nodeType == 3){      //判断下一个节点类型为3则是“文本”节点  ，回调自身函数  
        return getNextElement(node.nextSibling);
    }
    return null;
}

window.onload=function(){
	//动态创建支付方式
	window.onresize();
	//类似手风琴的原生js代码
	var oRow=document.getElementsByClassName("row");
	// console.log(oRow);
	var alli=document.getElementsByTagName("i");
	// console.log(alli[0].children);
	;
	for(var i=0;i<oRow.length;i++)
	{
		oRow[i].flag=false;
		oRow[i].onclick=function(){
				//console.log(this);
			if(this.flag==false)
			{	//清除其他的样式
				for(var j=0;j<oRow.length;j++)
				{
					oRow[j].flag=false;
					// console.log("清除"+oRow[j].flag);
				}
				this.flag=true;
			}else
			{this.flag=false;
			}
			for(var j=0;j<oRow.length;j++)
			{
				if(oRow[j].flag==false)
				{
					var index=j;
					alli[index].children[0].src="images/750-1200j_10.png";
				 	//console.log(alli[index].children[0].src);
				 	var nenode=getNextElement(oRow[j]);
				 	// console.log(index+'隐藏');
				 	nenode.style.display="none";
				}else{
					var index=j;
					alli[index].children[0].src="images/750-1200j_07.png";
				 	//console.log(alli[index].children[0].src);
				 	var nenode=getNextElement(oRow[j]);
				 	// console.log(index+'出现');
				 	nenode.style.display="block";
				}
			}
		}
	}
	oRow[0].flag=true;
	//创建模板
	// var oUl=document.getElementsByTagName("ul");
	// /*HTML模板
	// <li><a target="_blank" href="arr[0].href">
	// 			<div class="paytle">
	// 				<div class="tpc" id="pic1"><div class="jia"></div></div>
	// 				<div class="bot">paypal</div>
	// 			</div>
	// 			</a>
	// </li>
	// */
	// var data = [{'href':'#'},{'href':'#'}]

	// //var tpl = '<h1>Hello {{company}}</h1>';
	// var tpl = '{{#data}}<li><a target="_blank" href="{{data[0].href}}"><div class="paytle"><div class="tpc" id="pic1"><div class="jia"></div></div><div class="bot">paypal</div></div></a></li>{{/data}}';
	// var html = Mustache.render(tpl, data);

	// console.log( html )
	}
window.onresize = function(){
		// console.log('屏幕改变');
	var oBody=document.getElementsByTagName("body")[0];
	var oUl=document.getElementsByTagName("ul");
	// console.log(oBody.offsetWidth);
	// console.log(oBody.offsetHeight);
	// console.log(oUl)
	// console.log(oBody.offsetWidth)
		if(oBody.offsetWidth<=320){
			//console.log('<iphone5');
			for(var i=0;i<oUl.length;i++)
			oUl[i].style.width="220px";
		}else if(oBody.offsetWidth>320){
			console.log('>iphone5');
			for(var i=0;i<oUl.length;i++)
			oUl[i].style.width="width:330px";
		}
}
