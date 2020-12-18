function checkit(){
	var da={
		LX911:"E5",
		LX912:"AA2",
		LX913:"有",
		LX914:"256",
		LX915:"IV",
		LX916:"65536",
		LX9211:"中国人",
		LX9212:"中国人",
		LX9213:"居左",
		LX9221:"125",
		LX9222:"125",
		LX9223:"居右",
		LX9231:"7212743",
		LX9232:"7212743",
		LX9233:"居右",
		LX9241:"7737212743",
		LX9242:"7737212743",
		LX9243:"居右",
		LX9251:"07737212743",
		LX9252:"'07737212743",
		LX9253:"居左",
		LX9261:"4.50331E+17",
		LX9262:"450331199805210000",
		LX9263:"居右",
		LX9271:"450331199805210021",
		LX9272:"'450331199805210021",
		LX9273:"居左",
		LX9281:"6月20日",
		LX9282:"2019/6/20",
		LX9283:"居右",
		LX9291:"6/20",
		LX9292:"'6/20",
		LX9293:"居左",
		LX92A1:"0.3",
		LX92A2:"=6/20",
		LX92A3:"居右",
		LX92B1:"文本",
		LX92B2:"数值",
		LX931:"3、4、5、6、7、8、9",
		LX932:"7、9、11、13、15、17、19",
		LX933:"10月31日、11月1日",
		LX934:"乙、丙、丁",
		LX935:"丑、寅、卯"
	};
	var errorNum=0;
	for(var key in da){
		var e=document.getElementsByName(key);
		if (!!e){
			if (da[key].toUpperCase()!=e[0].value.toUpperCase()){
				errorNum=errorNum+1;
				e[0].style.backgroundColor="red";
				//e[0].value=da[key];
			}else{
				e[0].style.backgroundColor="";
			}
		}
	}
	if (errorNum==0){
		alert("非常好，请保持这样不要操作其它，等待老师过来检查通过");
	}else{
		alert("还有" + errorNum + "个错误的地方，已经用红色标识了，修改好之后再提交");
	}
}

function checkitC(){
	var da={
		LXC01:"180054",
		LXC02:"180054",
		LXC03:"360054",
		LXC04:"360054",
		LXC09:"有",
		LXC10:"无",
		LXC11:"有",
	};
	var errorNum=0;
	for(var key in da){
		var e=document.getElementsByName(key);
		if (!!e){
			if (da[key].toUpperCase()!=e[0].value.toUpperCase()){
				errorNum=errorNum+1;
				e[0].style.backgroundColor="red";
				//e[0].value=da[key];
			}else{
				e[0].style.backgroundColor="";
			}
		}
	}
	var LXC05=parseInt(document.getElementsByName("LXC05")[0].value);
	var LXC06=parseInt(document.getElementsByName("LXC06")[0].value);
	var LXC07=parseInt(document.getElementsByName("LXC07")[0].value);
	var LXC08=parseInt(document.getElementsByName("LXC08")[0].value);
	var LXC01=parseInt(da["LXC01"]);
	if (!(LXC01>LXC06 && LXC06>LXC05)){
		errorNum=errorNum+2;
		document.getElementsByName("LXC05")[0].style.backgroundColor="red";
		document.getElementsByName("LXC06")[0].style.backgroundColor="red";
	}else{
		document.getElementsByName("LXC05")[0].style.backgroundColor="";
		document.getElementsByName("LXC06")[0].style.backgroundColor="";
	}
	if (!(LXC01>LXC08 && LXC08>LXC07)){
		errorNum=errorNum+2;
		document.getElementsByName("LXC07")[0].style.backgroundColor="red";
		document.getElementsByName("LXC08")[0].style.backgroundColor="red";
	}else{
		document.getElementsByName("LXC07")[0].style.backgroundColor="";
		document.getElementsByName("LXC08")[0].style.backgroundColor="";
	}
	if (errorNum==0){
		alert("非常好，请保持这样不要操作其它，等待老师过来检查通过");
	}else{
		alert("还有" + errorNum + "个错误的地方，已经用红色标识了，修改好之后再提交");
	}
}