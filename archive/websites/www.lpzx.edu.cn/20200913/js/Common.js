function formatterdate(val, row) {
  //  if (val != null) {
        //var date = new Date(val);
  //      return  date.getFullYear() + '-' + (date.getMonth() + 1) + '-'
//+ date.getDate();
 //   }
}
//时间戳
function getTimes() {
    var now = 0;
    var d = new Date()
    var vDay = d.getDate()
    var vYear = d.getFullYear()
    var vMon = d.getMonth()
    var hh = d.getHours();
    var mm = d.getMinutes()
    var se = d.getSeconds()
    now = vYear + '' + vMon + '' + vDay + '' + hh + '' + mm + '' + se
    return now
}
//这里的url必须是带有参数的
function getAshxVal(_url) {
    var val = $.ajax({
        url: _url + "&t=" + getTimes(),
        async: false
    }).responseText;
    return val
}
//弹出信息窗口 
//title:标题 
//msgString:提示信息 
//msgType:信息类型 [error,info,question,warning]
function Alerts( msgString, msgType) {
    switch (msgType){
        case 1:
            $.messager.alert("", msgString, "error");
 　　     break
　　    case 2:
            $.messager.alert("", msgString, "warning");
　　    break
        case 3:
            $.messager.alert("", msgString, "info");
　　    break
        case 4:
            $.messager.alert("", msgString, "question");
        break
　　  default:
        $.messager.alert("", msgString, "");
    }
    
}
//EasyUI 数据分页绑定
//分页绑定
function pgMsg(_table) {
    $(_table).datagrid('getPager').pagination({
        displayMsg: '当前显示从{from}到{to}共{total}记录'
    });
}
//计算天数差的函数，通用
//sDate1的时间早于sDate2 返回负数
function DateDiff(sDate1, sDate2) {  //sDate1和sDate2是2002-12-18格式
    var aDate, oDate1, oDate2, iDays;
    aDate = sDate1.split("-");
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);  //转换为12-18-2002格式
    aDate = sDate2.split("-");
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
    iDays = (oDate1 - oDate2) / 1000 / 60 / 60 / 24;  //把相差的毫秒数转换为天数
    return iDays;
}
//计算时间差(秒)的函数，通用
//sDate1的时间早于sDate2 返回负数
function DateDiff(sDate1, sDate2) {  //sDate1和sDate2是2002-12-18格式
    var aDate, oDate1, oDate2, iDays;
    aDate = sDate1.split("-");
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);  //转换为12-18-2002格式
    aDate = sDate2.split("-");
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
    iDays = (oDate1 - oDate2) / 1000;  //把相差的毫秒数转换为天数
    return iDays;
}
//JS获取URL参数指
//getUrlValue 
var str = window.location.href;
var es = /SouceID=/;
es.exec(str);
var right = RegExp.rightContext;
function GetParam() {
    var url = document.location.href;
    var name = ""
    if (url.indexOf("=") > 0) {
        name = url.substring(url.indexOf("=") + 1, url.length)
    }
    return name;
}
function getUrlValue(paramName) {
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    if (paramValue.length == 0) {
        //window.location = "123.html"
    }
    else {
        return paramValue;
    }
}
//针对模版页Js取值
function GetIdVal(Id) {
    var _id = "#main_" + Id;
    return $.trim($(_id).val());
}
//针对模版夜js设置input焦点
function FocusOn(Id) {
    var _id = "#main_" + Id;
    $(_id).focus();
}

//$(function () {
//    $("#loading").ajaxStart(function () {
//        $(_load).html("<img src='/images/loading.gif' />");
//       
//    });
//    $(_load).ajaxSuccess(function () {
//        $(this).html("");
//        // $(this).empty(); // 或者直接清除 
//    });

//});
